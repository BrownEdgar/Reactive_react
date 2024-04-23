import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Title from '../../utils/UI/Title/Title'
import Blog from '../../components/Blog/Blog';
import './App.scss'
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { object, string } from 'yup';
import { nanoid } from 'nanoid';

const initialValues = {
  title: '',
  desc: '',
  poster: '',
  author: ''
}


const validationSchema = object(
  {
    title: string().required(),
    desc: string().required(),
    poster: string().required(),
    author: string().required()
  }
)

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null)



  const setEditableBlogId = (id, option = null) => {
    if (option === 'cancel') {
      setCurrentBlog(null)
    } else {
      setCurrentBlog(id)
    }
  }

  const getPosts = () => {
    axios('http://localhost:3000/blogs')
      .then(res => setBlogs(res.data))
  }

  useEffect(() => {
    getPosts()
  }, [])

  const handleSubmit = (values, formik) => {
    // poster:"C:\\fakepath\\photo.jpg"

    const blog = {
      id: nanoid(),
      title: values.title,
      desc: values.desc,
      poster: `./images/${values.poster.split('fakepath\\')[1]}`

    }

    axios.post('http://localhost:3000/blogs', blog)
      .then(res => {
        getPosts()
      })
      .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/blogs/${id}`)
      .then(getPosts)
      .catch(err => console.log(err))
  }

  return (
    <div className='App'>
      <Title title="Our Blogs" center />
      <div className="App__form">
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
                <div className="form__group">
                  <Field type="text" name='title' placeholder='title' />
                  <ErrorMessage name='title' component='span' />
                </div>
                <div className="form__group">
                  <Field as='textarea' name='desc' >
                    Enter Blog description
                  </Field>
                  <ErrorMessage name='desc' component='span' />
                </div>
                <div className="form__group">
                  <Field as='select' name='author' >
                    <option value="pushkin">pushkin</option>
                    <option value="hovo">hovo</option>
                    <option value="unknown">unknown</option>
                  </Field>
                  <ErrorMessage name='desc' component='span' />
                </div>
                <div className="form__group">
                  <Field type="file" name='poster' />
                  <ErrorMessage name='poster' component='span' />
                </div>
                <div className="form__group">
                  <input type="submit" value='add blog' />
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>


      <div className="App__blogs">
        {blogs.map(elem => {
          return <Blog
            blog={elem}
            key={elem.id}
            handleDelete={handleDelete}
            setId={setEditableBlogId}
            currentBlog={currentBlog}
            getPosts={getPosts}

          />
        })}
      </div>
    </div>
  )
}
