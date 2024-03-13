import { useState } from 'react'
import './App.scss'
export default function App() {
  const [films, setFilms] = useState([
    {
      id: 1,
      title: 'Terminator',
      genre: 'Action',
      stock: 6,
      rate: 2.5
    },
    {
      id: 2,
      title: 'Die Hard',
      genre: 'Action',
      stock: 5,
      rate: 2.5,
    },
    {
      id: 3,
      title: 'Get Out',
      genre: 'Thriller',
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
  const deleteIndex = (index) => {
    setFilms(films.toSpliced(index, 1))
  }  
  return (
    <div className='App'>
      <h1 className='App__title'>Showing {films.length || 0} movies in the database</h1>
      <table className='App__content'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
          {films.map(elem => {
            return (
              <tbody key={elem.id}>
                <tr>
                  <td>{elem.title}</td>
                  <td>{elem.genre}</td>
                  <td>{elem.stock}</td>
                  <td>{elem.rate}</td>
                  <td>
                    <button onClick={() => deleteIndex(elem.id)} className='App__btn'>Delete</button>
                  </td>
                </tr>
              </tbody>
            )
          })}
      </table>
    </div>
  )
}
