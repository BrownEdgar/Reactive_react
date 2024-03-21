import React from 'react'
import './Modal.scss'

export default function Modal({closeModal, children}) {
  return (
    <div className='Modal'>
      <div className="Modal__content">
        {children}
      </div>
    </div>
  )
}

