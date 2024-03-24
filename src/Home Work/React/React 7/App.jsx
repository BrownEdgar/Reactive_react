import React, { useState } from 'react'
import './App.scss'

export default function App() {
  const [showpassword, setShowpassword] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const togglePassword = () => {
    setShowpassword(!showpassword)
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form__group'>
          <input type="email" id='email' placeholder='Email *' required />
        </div>
        <div className='form__group'>
          <input type={`${showpassword ? 'text' : 'password'}`} id='password' placeholder='Password *' required />
          <span>
            <i className={`${showpassword ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill'}`} onClick={togglePassword}></i>
          </span>
        </div>
        <div className='form__group'>
          <p className='form__title'>Forgot Password?</p>
        </div>
        <div className='form__submit'>
          <input type="submit" value='Log in' />
        </div>

        <div className='form__login'>
          <div className='form__login-facebook'>
            <a href="https://ru-ru.facebook.com/login/device-based/regular/login/?login_attempt=1" target='blank'>
              <input type="submit" value='Log in with Facebook' />
              <span>
                <i className="bi bi-facebook"></i>
              </span>
            </a>
          </div>

          <div className='form__login-google'>
            <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1%26nlr%3D1&ec=GAlAwAE&hl=ru&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-821765663%3A1711287533693675&theme=mn&ddm=0" target='blank'>
              <input type="submit" value='Log in with Google' />
              <span>
                <i className="bi bi-google"></i>
              </span>
            </a>
          </div>
        </div>

      </form>
    </div>
  )
}
