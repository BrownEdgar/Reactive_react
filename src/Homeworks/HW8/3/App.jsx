import React, { useState } from 'react'
import Title from '../Title'
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    const {username, password, email} = e.target
    const user = {
      username: username.value,
      password: password.value,
      email: email.value
    }
    setUsers([...users, user])
  }
  return (
    <div className='App'>
      <Title title='React Forms' variant='dark' center/>
      <hr />
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <input type="text" name='username' placeholder='Username' required />
        <input type="password" name='password' placeholder='Password' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <input type="checkbox" className='Forms__check' name="checkbox"/>
        <input type="submit" className='Forms__submit' value="Login Here" />
        <p>Dont't Have an Account? <a href="">Sign Up!</a></p>
      </form>
      <hr />
      <table>
        <thead>
          <tr>
            <th>username</th>
            <th>password</th>
            <th>email</th>
          </tr>
        </thead>
        {
          users.map(elem => {
            return (
              <tbody key={elem}>
                <tr>
                  <td>{elem.username}</td>
                  <td>{elem.password}</td>
                  <td>{elem.email}</td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
    </div>
  )
}
