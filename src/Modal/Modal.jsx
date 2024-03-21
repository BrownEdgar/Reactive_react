import React from 'react'
import './Modal.scss'

export default function Modal({closeModal}) {
  return (
    <div className='Modal'>
      <div className="Modal__content">
        <h1>You are welcome!</h1>
        <button className='Modal__btn' onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  )
}

