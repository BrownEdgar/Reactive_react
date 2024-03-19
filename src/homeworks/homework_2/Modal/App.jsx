import React from 'react'
import './App.scss'

export default function Modal({closeModal}) {
  return (
    <div className='Modal'>
        <div className="Modal__content">
            <h1>You are welcome!</h1>
            <button className='Modal__btn' onClick={closeModal}>
                <i class='bx bxs-message-rounded-x'></i>
            </button>
        </div>
    </div>
  )
}

