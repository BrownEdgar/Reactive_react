import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './App.scss'
import Modal from '../../components/Modal/Modal';

const DB_URL = import.meta.env.VITE_DB_URL;

export default function App() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null)

  const toggleModal = () => setIsOpen(!isOpen);

  const deletePostById = () => {
    setData(data.filter(elem => elem.id !== currentPostId));
    setCurrentPostId(null);
    toggleModal()
  }

  useEffect(() => {
    axios(DB_URL + 'comments?_limit=9').then(res => setData(res.data))
  }, [])

  return (
    <div className='App'>
      {
        isOpen ? <Modal toggleModal={toggleModal} deletePostById={deletePostById} /> : null
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
