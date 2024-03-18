import React, { useEffect } from 'react'
import './Modal.scss'

export default function Modal({ toggleModal, deletePostById }) {

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.className === 'Modal') {
        toggleModal()
      }
    }
    window.addEventListener('click', handleClick)
    return () => {
      console.log('the end')
      window.removeEventListener('click', handleClick)
    }
  }, [])



  return (
    <div className='Modal'>
      <div className="Modal__content">
        <h1>Are you sure? </h1>

        <button onClick={deletePostById}>DELETE</button>
      </div>
    </div>
  )
}
