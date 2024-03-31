import React, { useState } from 'react'
import "axios"
import "./Sing.scss"
import { nanoid } from "nanoid"
import Modal from "../../Modal/Modal"

export default function Sing() {
  const [isOpen, setisOpen] = useState(false)
  const [isLogIN, setIsLogIN] = useState(false)
  const [showPassword, setshowPassword] = useState(false)
  const [seeUsers, setseeUsers] = useState(false)
  const showPass = () => {
    setshowPassword(!showPassword)
  }

  const [users, setusers] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const {email, password} = e.target
    const user = {
      id: nanoid(7),
      email: email.value,
      password : password.value
    }
    setusers([...users, user])
  }
  
  const toggleModal = () => {
    setisOpen(!isOpen)
  }
  const login = () => {
    setIsLogIN(!isLogIN)
  }
  const openTable = () => {
    setseeUsers(!seeUsers)
  }

  return (
    <div className='Sing'>
      {
        isOpen ? <Modal text="Gluxd moranayir" toggleModal={toggleModal}/> : null
      }
      {
        isLogIN ? <Modal text="You are successfully registered, you can see other users by clicking on <Our users>" toggleModal={login}/> : null
      }


      <form className='form' onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form__group form__group-password">
          <label htmlFor="password">Password</label>
          <input type={`${showPassword ? "text" : "password"}`} id='password' className='form__eye' required />
          <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} `} onClick={showPass}></i>
        </div>
        <p onClick={toggleModal}>Forgot Password?</p>
        <input type="submit" value="Log in" onClick={login}/>
      </form>
      <div className="Sing__links">
        <a href="http://facebook.com"> <i className="bi bi-facebook"></i> Log in whit Facebook</a>
        <a href="http://google.com"><i className="bi bi-google"></i>Log in with Google</a>
      </div>
      
      <span onClick={openTable}> Our users </span>
      <table className={`Sing__table ${!seeUsers ? "hide" : ""}`} >
        <thead className='Sing__head'>
          <tr>
            <th>User ID</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody className='Sing__body'>
          {
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
