import React, {useState} from 'react'
import './Form.scss'
import Modal from '../../Modal/Modal'

export default function Form() {
  const [users, setUsers] = useState([
    {
      id:1,
      username:'Ero',
      email:'tamaryanero@gmail.com',
      password: 'Ero'
    },
    {
      id:2,
      username:'Mher',
      email:'navasardyanmher@gmail.com',
      password: 'Mher'
    },
    {
      id:3,
      username:'Tiko',
      email:'tikchxrikyan@gmail.com',
      password: 'Tiko'
    },
    {
      id:4,
      username:'Davo',
      email:'davidhakhinyan@gmail.com',
      password: 'Davo'
    }
  ])
  const [isopen, setIsopen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, username, password } = e.target
    const isUserExist = users.some(elem => {
      elem.email === email.value.toLowerCase() && 
      elem.username === username.value.toLowerCase() &&
      elem.password === password.value.toLowerCase()
    })
    if (isUserExist) {
      toggleModal();
    }else{
      alert('Login error, please try again')
    }
  }

  const toggleModal = () => setIsopen(!isopen)

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
