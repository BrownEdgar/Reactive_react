import React from 'react'
import './App.scss'
import Person from './Person/Person'


export default function App() {
  const title = 'Hello World!'
  const people = ["Sergey", "Vahe", "Vahag", "Ero", "Narek", "Armen"]
  return (
    <div className='App'>
      <h1 className='wrapper'>{title.toUpperCase()}</h1>
      <button>read more</button>
      <hr />
      <Person people={people}/>
      
    </div>
  )
}
