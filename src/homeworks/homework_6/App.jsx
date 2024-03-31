import React, {useState} from 'react'
import {ErrorMessage, Field, Formik, Form } from 'formik'
import { string, object } from 'yup'
import './App.scss'


const validationSchema = object({
  email: string().email('must be emil definetly').required('important!'),
  username: string().matches(/^[A-Z]/, "must start with uppercase").min(3, "too short").max(10, "too long").required("important!"),
  password: string().min(8, "too short").required("important!")
})

export default function App() {
  const [users, setUsers] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(second)
  
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
          <Form>
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
          </Form>
        )}
      </Formik>
    </div>
  )
}
