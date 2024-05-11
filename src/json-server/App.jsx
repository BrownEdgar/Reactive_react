import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Blog from './Blog/Blog';
import './App.scss'
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {object, string} from 'yup'
import {nanoid} from 'nanoid';

const initialValues = {
  title: '',
  desc: '',
  poster: '',
}

const validationSchema = object(
  {
    title: string().required(),
    desc: string().required(),
    poster: string().required(),
  }
)


export default function App() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    axios("http://localhost:3000/blogs")
    .then(res => setBlogs(res.data))
  }, [])
  const handleSubmit = (values, formik) => {
    // "C:\fakepath\photo.jpg"
    console.log(values);
    // const blog = {
    //   id: nanoid(),
    //   title: values.title,
    //   desc: values.desc,
    //   poster: `./images/${values?.file.name}`
    // }
    // console.log(blog);
  }
  
  return (
    <div className='App'>
      <div className="App_Form">
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
                <div className="form__group">
                  <Field title="text" name='title' placeholder='title' />
                  <ErrorMessage name="title" component="span" />
                </div>
                <div className="form__group">
                  <Field as="textarea" name='desc'>
                    Enter Blog description
                  </Field>
                  <ErrorMessage name="desc" component="span" />
                </div>
                <div className="form__group">
                  <Field type="file" name='poster' />
                  <ErrorMessage name="poster" component="span" />
                </div>
                <div className="form__group">
                  <input type="submit" value="add blog" />
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
      <div className="App__blogs">
      {
        blogs.map(elem => {
          return <Blog blog={elem} key={elem.id}/>
        })
      }
      </div>
    </div>
  )
}
