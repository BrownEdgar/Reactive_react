import React, { useEffect, useState } from 'react'
import './App.scss'
import Modal from './Modal/Modal'

export default function App() {
  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => setIsOpen(!isOpen);



  return (
    <div className='App'>
      {
        isOpen ? <Modal /> : null
      }
      <h1 className='App__title'>Sign in</h1>
      <div className='App__content'>
        <form>
          <input type="text" placeholder='Username' className='App__text' />
          <input type="password" placeholder='Password' className='App__password' />
        </form>
        <button className='App__btn' onClick={toggleModal}>Enter</button>

      </div>
    </div>
  )
}
