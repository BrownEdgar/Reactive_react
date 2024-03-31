import React, { useEffect } from 'react'
import './Modal.scss'
export default function Modal({ toggleModal, deletePostById }) {

  useEffect(() => {
    const handlelClick = (e) => {
      if (e.target.className === 'Modal') {
        toggleModal()
      }
    }
    window.addEventListener('click', handlelClick)
    return () => {
      window.removeEventListener('click', handlelClick)
    }
  }, [])
  

  return (
    <div className='Modal'>
      <div className="Modal__content">
        <h1>Are you sure?</h1>
        <button className='Modal__btn-green' onClick={toggleModal}>close</button>
        <button className='Modal__btn-red' onClick={deletePostById}>delete</button>
      </div>
    </div>
  )
}
