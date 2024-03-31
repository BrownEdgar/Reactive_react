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

  // const facebookClick = () => {
  //   setOpenFace(openFace)
  // }


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
          <button className='Form__btn1'>
            <i className="bi bi-facebook"></i>
            {/* {
              setOpenFace ? null : 
            } */}
            <p><a href="https://www.facebook.com/">Log in with Facebook</a></p>
          </button>
          <button className='Form__btn2'>
            <i className="bi bi-google"></i>
            <p><a href="https://www.google.com/intl/ru/gmail/about/">Log in with Google</a></p>
          </button>
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
