import React, {useState} from 'react'
import './App.scss'

export default function App() {
  const [isopen, setIsopen] = useState(false)
  const [user, setUser] = useState([])

  return (
    <div className='App'>
      <form className='form'>
        <h1>Logging in</h1>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email *' id='email'/>
        </div>
        <div className="form__group form__group-password">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Password *' id='password'/>
          <span>
            <i className="bi bi-eye-fill"></i>
          </span>
        </div>
        <span>
          <p>Forgot Password?</p>
        </span>
        <div className="form__group">
          <input type="submit" value='Log in'/>
        </div>

        <div className="form__inet">
          <button className='form__btn'>
            <i className="bi bi-facebook"></i>
            <p>Log in with Facebook</p>
          </button>
          <button className='form__btn-2'>
            <i className="bi bi-google"></i>
            <p>Log in with Google</p>
          </button>
        </div>
      </form>
    </div>
  )
}
