import { Field, Form, Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([])
  const [showPassword, setShowPassword] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, username, password } = e.target
    const user = {
      email: email.value,
      username: username.value,
      password: password.value
    }
    setUsers([...users, user])
    e.target.reset()
  }
  const deleteById = (id) => {
    const result = users.filter(elem => elem.id !== id)
    setUsers(result)
  }
  const changeUserId = (id) => {
    setShowPassword(id)
  }
  return (
    <div className='App'>
      {/* <Formik>
        <Form>
          <Field as="label">Email</Field>
          <Field type='text'   />
          <Field as="label">Username</Field>
          <Field type='text' />
          <Field as="label">Password</Field>
          <Field placeholder='password' type='password' required name='password'/>
        </Form>
      </Formik> */}
      <form onSubmit={handleSubmit}>
        <div className='Form__group'>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder='Email' id='email' name='email' required/>
        </div>
        <div className='Form__group'>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder='Username' id='username' name='username' required />
        </div>
        <div className="Form__group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Password' id='password' name='password' required />
        </div>
        <input type="submit" value='save'  />
      </form>
      <hr />
      {
        users.map(elem => {
          return (
            <div className='App__content' value={elem.id} key={elem}>
              <div>
                <span>email:</span>
                <span>{elem.email}</span>
              </div>
              <div>
                <span>username:</span>
                <span>{elem.username}</span>
              </div>
              <div>
                <span>password</span>
                <span>{(!showPassword == elem.id) ? '*'.repeat(10) : elem.password}</span>
                <i onClick={() => changeUserId(elem.id)} className={`bi ${!showPassword ? 'bi-eye-fill' : ' bi-eye-slash-fill'}`}></i>
              </div>
              <i className="bi bi-x-circle" onClick={() => deleteById(elem.id)}></i>
            </div>
          )
        })
      }
    </div>
  )
}