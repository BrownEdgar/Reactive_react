import React, { useReducer } from 'react'
import './App.scss'
import { initialState } from "./initialState";

function initialState(state,action) {
  switch (action.type) {
  case 'plus': return state + 1;
    
  default: return state;
  
 }
}

export default function App() {
  const [state = initialState, dispatch] = useReducer(initialState, 0)
  


  const handleClick = () =>{
    dispatch({type:'plus'})
  }


  return (
    <div className='App'>
      <h1></h1>
      <button onClick={handleClick}></button>
    </div>
  )
}

// Ստեղծել կոճակներ որոնք կանեն հետևյալ գործողությունները

// - Էջում պետք է ունենալ 1 input և այտեղ գրված անունը պետք է ավելացնել `developers` զանգվածի մեջ
// - Խառնել arr զանգվածը(shuffle)։
// - arr զանգվածի մեջ ավելացնել պատահական եռանիշ թիվ
// - arr զանգվածի մեջից ջնջել 10-ից փոքր էլեմենտները
// - փոխել user օբյեկտի name հատկությունը
// - ավելացնել user օբյեկտի մեջ նոր age հատկություն