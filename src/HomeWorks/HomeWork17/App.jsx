import React, { useReducer } from 'react'
import "./App.scss"
import reducer, { initialState } from "./reduce.js"
import { ADD, SHUFFLE, REMOVE, UPDATE, AGE, DEVELOPER } from "./actionType.js";
import { addNumber, remove, setAge, shuffle, update } from './functions';
export default function App() {
  const randomNumber = Math.round(Math.random() * (999 - 100) + 100)
  const [state, dispatch] = useReducer(reducer, initialState )

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.elements.username.value.trim();
    if (value !== "") {
      dispatch({type: DEVELOPER, payload: value})

      e.target.elements.username.value = "";
    }
  }




  console.log(state);
  return (
    <div className='App'>
      <div className="App__input">
        <form onSubmit={handleSubmit} className='App__form'>
          <div className='App__inputData'>
            <label htmlFor="username">Enter Username</label>
            <input type="text" id='username' name='username' />

          </div>
          <div className="App__btns">
            <button type='submit'>Add Developer</button>
            <button onClick={() => shuffle(dispatch)}>Shuffle array</button>
            <button onClick={() => addNumber(dispatch, randomNumber)}>Add Number</button>
            <button onClick={() => remove(dispatch)}>Remove Ringle Digits </button>
            <button onClick={() => update(dispatch)}>Change User</button>
            <button onClick={() => setAge(dispatch)}>Add Age</button>
          </div>
        </form>
      </div>

      <div className="App__Output">
        <h2>Output</h2> 
        <p> developers {JSON.stringify(state.developers)}</p>
        <p>user: {JSON.stringify(state.user)}</p>
        <p>arr: {JSON.stringify(state.arr)}</p>
      </div>
    </div>
  )
}



