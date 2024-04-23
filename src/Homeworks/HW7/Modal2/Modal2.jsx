import React from 'react'
import './Modal2.scss'
export default function Modal2({ handleClickCancel, handleClickOk }) {
  return (
    <div className='Modal2'>
      <div className="Modal2__content">
        <h1>Hi user!</h1>
        <p>Do you want to check the accaunt</p>
        <button className='Modal2__btn-red' onClick={handleClickCancel}>cancel</button>
        <button className='Modal2__btn-green' onClick={handleClickOk}>ok</button>
      </div>
    </div>
  )
}
