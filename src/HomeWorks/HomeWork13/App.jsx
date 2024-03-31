import React, { useEffect, useState } from 'react'
import "./App.scss";
import "axios"
import { nanoid } from "nanoid"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { string, object } from "yup"
import axios from 'axios';
import Users from './Users/Users';

export default function Sing() {
  const [showPassword, setshowPassword] = useState(false)
  const showPass = () => {
    setshowPassword(!showPassword)
  }

  const validationSchema = object({
    email: string().email(),
    username: string().min(3).max(15),
    password: string().matches(/^[A-Z]/, "must start with uppercase").matches(/\d/, "must have a minimum 1 number").matches(/^[!@#$%^&*]/,"musrt have a minimum 1 symbol")
  });
  const [users, setusers] = useState([])


  useEffect(() => {
    axios("http://localhost:3000/users")
    .then( res => setusers(res.data))
  }, [])
  

  const handleSubmit = (values,formik) => {
    const user = {
      id: nanoid(5),
      email: values.email,
      username: values.username,
      password: values.password
    }
    axios.post("http://localhost:3000/users", user)
    formik.resetForm()
  }

  console.log(users);
  return (
    <div>
      <div className='Sing'>

        <Formik onSubmit={handleSubmit} 
        initialValues={
          { email: "", username: "", password: "" }
        }
          validationSchema={validationSchema} >
          <Form className='form' >
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
              <ErrorMessage name="email" component="p" />
            </div>
            <div className="form__group">
              <label htmlFor="username">Username</label>
              <input type="text" name='username' />
              <ErrorMessage name="username" component="p" required/>
            </div>
            <div className="form__group form__group-password">
              <label htmlFor="password">Password</label>
              <input type="password" name='password' required/>
              <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} `} onClick={showPass}></i>
              <ErrorMessage name="password" component="p" />
            </div>
            <input type="submit" value="SAVE" />
          </Form>
        </Formik>
    </div>

    <div className='Users__fix'>
        {
          users.map((user) => {
            return (
              <Users user={user} key={user.id} />
            )
          })
        }
    </div>
  </div>
  )
}
