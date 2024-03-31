import React from 'react'
import "./Modal.scss"
export default function Modal({ text, toggleModal }) {
  return (
    <div className='Modal'>
      <div className="Modal__content">
        <p>{text}</p>
        <button onClick={toggleModal}>Ok</button>
      </div>
    </div>
  )
}
