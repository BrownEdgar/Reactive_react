import React, {useState, useEffect} from 'react'
import {ErrorMessage, Field, Formik, Form } from 'formik'
import { string, object } from 'yup'
import './App.scss'


export default function App() {
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
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" className="error" component="p" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
