import React, { useState } from 'react'
import "./HW5.scss"
export default function Table() {
  
  const [data, setdata] = useState([
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

const handleClick = (index) => {
  setdata(data.toSpliced(index, 1))
}

  return (
    <div className='Table'>
        <h4>Sowing {data.length} movies in the database</h4>
        
          <table className='Table__list'>
          <thead className='Table__list__head'>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
          </thead>
            <tbody className='Table__list__body'>
            {
              data.map((elem) => {
                return (
                  <tr key={elem.id}>
                    <td>{elem.title}</td>
                    <td>{elem.genre}</td>
                    <td>{elem.stock}</td>
                    <td>{elem.rate} </td>
                    <td><button onClick={handleClick}>Delete</button></td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>

            <table>
              {
                data.map((elem,index) => {
                    <tr key={elem.id}>
                        <th>elem.</th>
                    </tr>
                })
              }
            </table>

    </div>
  )
}
