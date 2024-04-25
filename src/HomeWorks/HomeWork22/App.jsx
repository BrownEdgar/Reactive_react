import React from 'react'
import { minusCount, plusCount } from '@/Counter/counterSlice'
import { fetchUsers } from '@/Users/usersSlice'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./App.scss"

export default function App() {
  const counter = useSelector((state) => state.counter)
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then(res => dispatch(fetchUsers(res.data)))
  }, [])
  

  return (
    <div className='App'>
      <div className='card-container counter'>
        <h1>Counter: {counter}</h1>
        <div className='btns'>
        <button onClick={() => dispatch(minusCount(5))}>Minuse</button>
        <button onClick={() => dispatch(plusCount(5))}>Pluse</button>
        </div>
      </div>
      <div className="Users">
        {
          users.map(user => {
            return (
              <div className="card-container" key={user.id}>
                <span className="id">{user.id}</span>
                <img className="round" src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png" alt="user" />
                <h3>{user.name}</h3>
                <h6>{user.address.city}</h6>
                <p>{user.catchPhrase}</p>
                <div className="buttons">
                  <button className="primary">
                    Message
                  </button>
                  <button className="primary ghost">
                    Following
                  </button>
                </div>
                <div className="skills">
                  <h6>Contacts</h6>
                  <ul>
                    <li>{user.phone}</li>
                    <li>
                      {user.address.city}, 
                      {user.address.street}, 
                      {user.address.suite}, 
                      {user.address.zipcode}
                    </li>

                  </ul>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}
