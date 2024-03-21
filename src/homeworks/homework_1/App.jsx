import React, { useState } from 'react'
import './App.scss'

export default function App() {
  const [data, setData] = useState(
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

  const handleDelete = (id) => {
    setData(data.filter(film => film.id !== id))
  }
  return(
    <table className='App'>
      <caption>Showing {data.length} movies in the database.</caption>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
        </tr>
      </thead>
      {data.map(film => (
          <tbody key={film.id}>
            <tr>
              <td>{film.title}</td>
              <td>{film.genre}</td>
              <td>{film.stock}</td>
              <td>{film.rate}</td>
              <td>
                <button onClick={() => handleDelete(film.id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
    </table>
  )
}
