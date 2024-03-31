import React, { useState } from 'react'
import './App.scss'
import { Formik, Form, } from "formik";

export default function App() {
  const [users, setusers] = useState([])
  return (
    <div className='App'>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {
          (formik) => {
            return (
              <Form>
                <div className='App__content'>

                  <div className='App__content-log'>

                    <label htmlFor="">Email</label>
                    <div className='App__email'>
                      <input type="email" />
                    </div>

                    <label>Username</label>
                    <div className='App__name'>
                      <input type="text" />
                    </div>

                    <label>Password</label>
                    <div className='App__password'>
                      <input type="text" />
                    </div>

                    <div className='App__btn'>
                      <button disabled={!formik.isValid}>save</button>
                    </div>
                  </div>
                </div>
              </Form >
            )
          }
        }


      </Formik >
    </div >
  )
}
