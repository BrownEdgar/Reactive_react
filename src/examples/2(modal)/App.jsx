import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './App.scss'
import Modal from '../../components/Modal/Modal';

const DB_URL = import.meta.env.VITE_DB_URL;

export default function App() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null)
  const [firstMOdalIsOPen, setFirstMOdalIsOPen] = useState(false)

  const toggleModal = () => setIsOpen(!isOpen);

  const deletePostById = () => {
    setData(data.filter(elem => elem.id !== currentPostId));
    setCurrentPostId(null);
    toggleModal()
  }

  useEffect(() => {
    setTimeout(setFirstMOdalIsOPen, 2000, true)
  }, [])


  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/comments?_limit=9').then(res => setData(res.data))
  }, [])

  return (
    <div className='App'>
      {
        isOpen ? (
          <Modal toggleModal={toggleModal} >
            <h1>Are you sure? </h1>
            <button onClick={deletePostById}>DELETE</button>
          </Modal>
        ) : null
      }
      {
        firstMOdalIsOPen ? (
          <Modal toggleModal={toggleModal} >
            <h1>Welcome</h1>
            <button onClick={() => setFirstMOdalIsOPen(false)}>Close</button>
          </Modal>
        ) : null
      }

      <h1>React Modal Example</h1>
      <div className="App__posts">
        {data.map(elem => {
          return (
            <div key={elem.id}>
              <i className='bx bxs-message-square-x' onClick={() => {
                toggleModal();
                setCurrentPostId(elem.id)
              }}></i>
              <h2>{elem.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}
