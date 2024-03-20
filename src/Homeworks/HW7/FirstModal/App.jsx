import React from 'react'
import './App.scss'
export default function App({ handleClickCancel, handleClickOk }) {
  return (
    <div className='App'>
      <div className="App__content">
        <h1>Hi user!</h1>
        <p>Do you want to check the accaunt</p>
        <button className='App__btn-red' onClick={handleClickCancel}>cancel</button>
        <button className='App__btn-green' onClick={handleClickOk}>ok</button>
      </div>
    </div>
  )
}
