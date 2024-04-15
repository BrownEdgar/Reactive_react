import React from 'react'
import "./Modal1.scss"
export default function Modal1({ toggleModal, DeletePostById }) {
  return (
    <div className='Modal'>
      <div className='Modal__conteiner'>
        <h1>Are You Sure?</h1>
        <div className='Modal__btns'>
          <button onClick={toggleModal}>NO</button>
          <button onClick={DeletePostById}>Yes</button>
        </div>
      </div>
    </div>
  )
}
