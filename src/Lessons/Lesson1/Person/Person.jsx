import React from 'react'
import './Person.scss'


export default function Person(props) {
  return (
    <div className='Person'>
      <ul>
        {
          props.people.map(elem => {
            return <li key={elem} className={elem === 'Vahag' ? 'active' : ''}>{elem}</li>
          })
        }
      </ul>
    </div>
  )
}
