import React, { useState, useEffect } from 'react'
import Title from '../../utils/UI/Title/Title'
import { nanoid } from 'nanoid'
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([])
  const [showPassword, setShowPassword] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = e.target;
    const user = {
      id: nanoid(5),
      username: username.value,
      password: password.value
    }

    setUsers((prevUsers) => {
      const newUsers = [...prevUsers, user]
      localStorage.setItem('users', JSON.stringify(newUsers))
      return newUsers;
    })

  }

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(users)
  }, [])

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  const deleteById = (id) => {
    const result = users.filter(elem => elem.id !== id);
    setUsers(result)
  }

  const changeCurrentUserId = (userId) => {
    setCurrentUserId((userId === currentUserId) ? null : userId)
  }

  return (
    <div className='App'>
      <Title title={"React forms"} variant={'polo'} center size='lg' />

      <form onSubmit={handleSubmit} className='form'>
        <div className="form__group">
          <label htmlFor="usersname">Usersname</label>
          <input type="text" id='username' required />

        </div>
        <div className="form__group form__group-password">
          <label htmlFor="password">Password</label>
          <input type={`${showPassword ? "text" : "password"}`} id='password' required />
          <span >
            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} onClick={togglePassword}></i>
          </span>
        </div>
        <div className="form__group">
          <input type="submit" value='register' />
        </div>
      </form>

      <table>
        <caption>OUR USERS</caption>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>password</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(elem => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.username}</td>
                <td className='password'>
                  {(currentUserId == elem.id) ? elem.password : '*'.repeat(10)}

                  <i
                    className={`bi ${(currentUserId == elem.id) ? "bi-eye-slash" : "bi-eye"}`}
                    onClick={() => changeCurrentUserId(elem.id)}
                  >
                  </i>

                </td>
                <td className='delete'>
                  <i
                    className="bi bi-x-circle-fill"
                    onClick={() => deleteById(elem.id)}
                  ></i>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}
