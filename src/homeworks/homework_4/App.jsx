import React, {useState} from 'react'
import './App.scss'
import { nanoid } from 'nanoid'

export default function App() {
  const [isopen, setIsopen] = useState(false)
  const [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = e.target
    const user = {
      id: nanoid(5),
      email: email.value,
      password: password.value
    }
    setUsers([...users, user])
  }

  const togglePassword = () => {
    setIsopen(!isopen)
  }

  return (
    <div className='App'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Logging in</h1>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email *' id='email'/>
        </div>
        <div className="form__group form__group-password">
          <label htmlFor="password">Password</label>
          <input type={`${togglePassword ? "text" : "password"}`} placeholder='Password *' id='password'/>
          <span>
            <i className={`bi ${togglePassword ? "bi-eye-slash" : "bi-eye-fill"}`} onClick={togglePassword}></i>
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
      
      <table>
        <caption>USERS DATA</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map(elem => {
            return(
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.email}</td>
                <td>{elem.password}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
