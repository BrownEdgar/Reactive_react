import React, { useState } from 'react'
import Title from '../../utils/UI/Title/Title'
import './App.scss'
import Modal from '../../components/Modal/Modal'


export default function App() {
  const [users, setUsers] = useState([{
    id: 1,
    username: "Ashot",
    email: 'ashot@gmail.com'
  }])
  const [isOpen, setIsOpen] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username } = e.target;
    const isEmailExist = users.some(elem => elem.email === email.value.toLowerCase())
    if (isEmailExist) {
      toggleModal();
      return;
    }
    const user = {
      id: Math.round(Math.random() * 1e5),
      email: email.value.toLowerCase(),
      username: username.value
    }
    setUsers([...users, user]);
    e.target.reset()
  }
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className='App'>
      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <h2>Email exist</h2>
        <p>please try again!</p>
      </Modal>
      <Title title="React forms" variant='light' size='lg' as='h3' />
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' required />
        <label htmlFor="username">Username</label>
        <input type="text" name='username' id='user' required />
        <input type="submit" />
      </form>

      <ul className='list'>
        {users.map(elem => {
          return <li key={elem.id}>
            <span>{elem.username}</span>
            <span>{elem.email}</span>
          </li>
        })}
      </ul>
    </div>
  )
}