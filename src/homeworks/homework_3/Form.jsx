import React, {useState} from 'react'
import './Form.scss'
import Modal from '../../Modal/Modal'

export default function Form() {
  const [users, setUsers] = useState([
    {
      id:1,
      username:'Ero',
      email:'tamaryanero@gmail.com'
    },
    {
      id:2,
      username:'Mher',
      email:'navasardyanmher@gmail.com'
    },
    {
      id:3,
      username:'Tiko',
      email:'tikchxrikyan@gmail.com'
    },
    {
      id:3,
      username:'Davo',
      email:'davidhakhinyan@gmail.com'
    }
  ])

  const handleSubmit = (e) => {
    e.target.preventDefault()
  }

  return (
    <div className='Form'>
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' placeholder='Username'/>
          <input type="password" name='password' placeholder='password'/>
          <input type="email" name='email' placeholder='Your Email'/>
          <input type="Submit" />
        </form>
    </div>
  )
}
