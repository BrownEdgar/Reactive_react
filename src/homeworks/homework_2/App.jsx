import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../../Modal/Modal'
import './App.scss'

export default function User() {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(true)

  const closeModal = () => setOpen(!open)

  useEffect(() => {
    const getData = () => {
      axios(
        {
          baseURL: 'https://jsonplaceholder.typicode.com/',
          url: 'comments',
          params:{
            _limit:9
          }
        }
      ).then((res) => setData(res.data))
    }
    getData()
  }, [])

  return (
    <div className='User'>
      {
        open ? 
        <Modal>
          <h1>You are welcome!</h1>
          <button className='Modal__btn' onClick={closeModal}>
            Close
          </button>
        </Modal> : null
      }
      <h1 className='User__title'>Comments</h1>
      <div className='User__comments'>
        {
          data.map(elem => {
            return(
              <div key={elem.id}>
                <h3>{elem.body}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}