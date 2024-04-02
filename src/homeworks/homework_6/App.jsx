import React, {useState} from 'react'
import {ErrorMessage, Field, Formik, Form } from 'formik'
import { string, object } from 'yup'
import { nanoid } from 'nanoid';
import './App.scss'


const validationSchema = object({
  email: string().email('must be emil definetly').required('important!'),
  username: string().matches(/^[A-Z]/, "must start with uppercase").min(3, "too short").max(10, "too long").required("important!"),
  password: string().min(8, "too short").required("important!")
})

export default function App() {
  const [users, setUsers] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleSubmit = (values, formik) => {
    const {email} = values
    if (!users.some(elem => elem.email === email)) {
      const user = {
        id: nanoid(4),
        ...values
      }
      setUsers([...users, user])
    }
    formik.resetForm();
  }
  console.log(users);

  const togglePassword = (index) => {
    setIsOpen(!isOpen)
    setCurrentIndex(index)
  }

  return (
    <div className='App'>
      <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={ 
        { 
          email: '',
          username: '',
          password: ''
        }
      }
      >
        {(formik) => (
          <Form className='form'>
            <div className="form__email">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" className="error" component="p" />
            </div>
            <div className="form__userName">
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" placeholder="Username" />
              <ErrorMessage name="username" className="error" component="p" />
            </div>
            <div className="form__password">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" className="error" component="p" />
            </div>
            <input type="submit" value="save"/>
          </Form>
        )}
      </Formik>

      <div className="data">
        {users.map((item, index) => {
          return(
          <div className="data__info">
            <div className="data__email data__user">
              <span className='data__saved'>Email:</span>
              <span>{item.email}</span>
            </div>
            <div className='data__userName data__user'>
              <span className='data__saved'>Username:</span>
              <span>{item.username}</span>
            </div>
            <div className='data__password data__user'>
              <span className='data__saved'>Password:</span>
              <span>{isOpen && currentIndex === index ? item.password : '*'.repeat(8)}</span>
              <i 
              className={`bi ${isOpen && currentIndex === index ? "bi-eye-fill" : "bi-eye-slash-fill"}`}
              onClick={() => togglePassword(index)}
              ></i>
            </div>
          </div>
          )
        })}
      </div>    
    </div>
  )
}
