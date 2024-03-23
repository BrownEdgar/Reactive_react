import React  from 'react'

export default function App() {
  return (
    <div className='App'>
      <form className='form'>
        <h1>Logging in</h1>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email *' id='email'/>
        </div>
        <div className="form__group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Password *' id='password'/>
          <i className="bi bi-eye"></i>
        </div>
        <span>
          <p>Forgot Password?</p>
        </span>
        <div className="form__group">
          <input type="submit" value='Log in'/>
        </div>

        <div className="form__inet">
          <button>
            <i className="bi bi-facebook"></i>
            <p>Log in with Facebook</p>
          </button>
          <button>
            <i className="bi bi-google"></i>
            <p>Log in with Google</p>
          </button>
        </div>
      </form>
    </div>
  )
}
