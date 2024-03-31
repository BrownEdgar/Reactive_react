import React from 'react'

export default function Modal2({ toggleModal }) {
  return (
    <div className='Modal'>
      <div className="Modal__container">
        <h1>Welcome!!!</h1>
        <button onClick={toggleModal}>OK</button>
      </div>
    </div>
  )
}
