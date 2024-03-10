import React from 'react'
import './App.scss'
import { useState } from 'react'

export default function App() {
    const [data, setdata] = useState(
        [
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
        ]
    )
  return(
    <div className='App'>
        <h1 className='App__title'>Showing 9 movies in the database</h1>
        <div className='App__content'>
          <h3>Title</h3>
          <ul>
            <li>Genre</li>
            <li>Stock</li>
            <li>Rate</li>
          </ul>
        </div>
    </div>
  )
}
