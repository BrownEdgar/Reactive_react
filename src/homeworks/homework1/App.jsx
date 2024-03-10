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
    <table className='App'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
        </tr>
        {data.map(film => {
          <tbody key={film.id}>
            <tr>
              <td>{film.title}</td>
              <td>{film.genre}</td>
              <td>{film.stock}</td>
              <td>{film.rate}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        })}
      </thead>
    </table>
  )
}
