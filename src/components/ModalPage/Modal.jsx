import React, { useEffect } from 'react'
import './Modal.scss'


function Modal({ toggleModal, deletePostById }) {

  // useEffect(() => {
  //   const handleClick = (e) => {
  //     if (e.target.className === 'Modal') {
  //        toggleModal()
  //     }
  //   }
  //   window.addEventListener('click', handleClick)
  //   return () => {
  //     window.addEventListener('click', handleClick)
  //   }
  // }, [])
  

  return (
      <div className='Modal'>
          <div className='Modal__content'>
              <h1>Are you sure?</h1>
              <button onClick={toggleModal}>cancel</button>
              <button onClick={deletePostById}>DELETE</button>
          </div>
    </div>
  )
}

export default Modal