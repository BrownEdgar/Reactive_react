import React from 'react'
import './Cities.scss'

export default function Cities({ data, deleteByIndex, quantity }) {
  return (
    <div className='Cities'>
      <ul>
        {
          data
          .slice(0, quantity)
          .map((elem, index) => {
            return (
              <li key={elem} className={elem === 'London' ? 'active' : ''}>
                {elem}
                <button onClick={() => deleteByIndex(index)} className='Cities__btn'>Delete</button>
              </li>
            ) 
          })
        }
      </ul>
    </div>
  )
}
