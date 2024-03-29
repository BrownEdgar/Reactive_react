import React, { useState, useEffect } from 'react'
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([])
  const [showPassword, setShowPassword] = useState(true)
  const [openFace, setOpenFace] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = e.target
    const user = {
      email: email.value,
      password: password.value
    }
    setUsers([...users, user])
  }

  const handleClick = () => {
    setShowPassword(!showPassword)
  }

  const deleteIndex = (index) => {
    setUsers(users.toSpliced(index, 1))
  }  

  return (
    <div className='App'>
      <form className='Form' onSubmit={handleSubmit}>
        <div className='Form__for-email'>
          <input type="email" placeholder='Email *' name='email' required />
        </div>
        <div className='Form__password'>
          <i className={`bi ${!showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`} onClick={handleClick}></i>
          <input type={`${!showPassword ? 'text' : 'password'}`} name="password" placeholder='Password *' required />
        </div>
        <div className='Form__a'>
          <a href="">Forgot Password?</a>
        </div>
        <div>
          <input type="submit" value='Log in' />
        </div>
        <div className='Form__btn'>
          <a href="https://www.facebook.com/" target='_blank' className='Form__face-btn'>
            <button>
              <i className="bi bi-facebook"></i>
              <p>Log in with Facebook</p>
            </button>
          </a>
          <a href="https://www.google.com/intl/ru/gmail/about/" target='_blank' className='Form__google-btn'>
            <button>
              <i className="bi bi-google"></i>
              <p>Log in with Google</p>
            </button>
          </a>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>email</th>
            <th>password</th>
            <th>delete</th>
          </tr>
        </thead>
        {
          users.map(elem => {
            return (
              <tbody key={elem}>
                <tr>
                  <td>{elem.email}</td>
                  <td>{elem.password}</td>
                  <td>
                    <button className='Table__btn' onClick={() => deleteIndex(elem.id)}>delete</button>
                  </td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
    </div>
  )
}
