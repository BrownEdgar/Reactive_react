import React, { useState } from 'react'
import './About.scss'

export default function About() {
  const deletelist = () => {
    const random = Math.round(Math.random() * data.length)
    setData(data.toSpliced(random - 1, random))
  }
  const [data, setData] = useState([
    {
      id: 1,
      title: "Terminator",
      genre: "Action",
      stock: 6,
      rate: 2.5,
    },
    {
      id: 2,
      title: "Die Hard",
      genre: "Action",
      stock: 5,
      rate: 2.5,
    },
    {
      id: 3,
      title: "Get Out",
      genre: "Thriller",
      stock: 8,
      rate: 3.5,
    },
    {
      id: 4,
      title: "Trip to Italy",
      genre: "Comedy",
      stock: 7,
      rate: 3.5,
    },
    {
      id: 5,
      title: "Airplane",
      genre: "Comedy",
      stock: 7,
      rate: 3.5,
    },
    
    
  ])
  return (
    <div className='About'>
      <div className='About__content'>
        <div className='About__head'>
          <ul className='About__ullist'>
            <li className='About__list-one'>Title</li>
            <li className='About__list'>Genre</li>
            <li className='About__list'>Stock</li>
            <li className='About__list'>Rate</li>
          </ul>
        </div>
        {
          data.map(elem => {
            return (
              <div key={elem.id}>
                <button className='About__btn' onClick={deletelist}>Delet</button>

                <ul className='About__ullist-body'>
                  <li className='About__list-body'>{elem.title}</li>
                </ul>

                <ul className='About__ullist-bodytwo'>
                  <li className='About__list-body'>{elem.genre}</li>
                </ul>

                <ul className='About__ullist-bodytree'>
                  <li className='About__list-body'>{elem.stock}</li>
                </ul>

                <ul className='About__ullist-bodyfor'>
                  <li className='About__list-body'>{elem.rate}</li>
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
