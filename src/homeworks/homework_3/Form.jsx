import React, {useState, useEffect} from 'react'
import './Form.scss'
import Modal from '../../Modal/Modal'

export default function Form() {
  const [users, setUsers] = useState([
    {
      id:1,
      username:'Ero',
      email:'tamaryanero@gmail.com',
    },
    {
      id:2,
      username:'Mher',
      email:'navasardyanmher@gmail.com',
    },
    {
      id:3,
      username:'Tiko',
      email:'tikchxrikyan@gmail.com',
    },
    {
      id:4,
      username:'Davo',
      email:'davidhakhinyan@gmail.com',
    }
  ])
  const [isopen, setIsopen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, password } = e.target
    const isUserExist = users.some(elem => {
      elem.email === email.value.toLowerCase() 
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
      {
        isopen ?
        <Modal>
          <h1>You are logined successfully</h1>
          <button className='Modal__btn' onClick={toggleModal}>Ok</button>
        </Modal>:null
      }
      <form onSubmit={handleSubmit}>
        <h1>Login form</h1>
        <div>
          <i className='bx bxs-user-circle' ></i>
          <input type="text" name='username' placeholder='Username'/>
        </div>
        <div>
          <i className='bx bxs-lock'></i>
          <input type="password" name='password' placeholder='password'/>
        </div>
        <div>
          <i className='bx bxl-gmail'></i>
          <input type="email" name='email' placeholder='Your Email'/>
        </div>
        <input type="Submit" value='Login'/>
      </form>
    </div>
  )
}
