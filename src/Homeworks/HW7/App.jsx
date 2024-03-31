import axios from 'axios'
import React, { useState, useEffect } from 'react'
import classNames from 'classNames';
import './App.scss'
import Modal from './Modal/Modal'
import Modal2 from './Modal2/Modal2'

const DB_URL = import.meta.env.VITE_DB_URL

export default function App() {
  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [currentPostId, setCurrentPostId] = useState(null)
  const [modal, setModal] = useState(true)
  const toggleModal = () => setIsOpen(!isOpen)
  const deletePostById = () => {
    setData(data.filter(elem => elem.id !== currentPostId))
    setCurrentPostId(null)
    toggleModal()
  }

  const handleClickCancel = () => setModal(modal)
  const handleClickOk = () => setModal(!modal)

  useEffect(() => {
    axios(
      {
        baseURL: DB_URL,
        url: 'posts',
        params: {
          _limit: 15
        }
      }
    )
      .then(res => setData(res.data))
  }, [])
  return (
    <div className='App'>
      {
        modal ? <Modal2 handleClickCancel={handleClickCancel} handleClickOk={handleClickOk} /> : null
      }
      {
        isOpen ? <Modal toggleModal={toggleModal} deletePostById={deletePostById}/> : null
      }
      <div className="App__posts">
        {
          data.map(elem => {
            return (
              <div key={elem.id}>
                <i className='bx bxs-message-square-x bx-md' onClick={() =>{
                   toggleModal()
                   setCurrentPostId(elem.id)
                }}></i>
                <h1>{elem.title}</h1>
                <p>{elem.body}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
