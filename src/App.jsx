import React from 'react'
import './App.scss'
import { useEffect, useState} from 'react'
import axios from 'axios'


export default function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState([])
  useEffect(() =>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data)
        setFilter(res.data)
      
      })
  }, [])
  const Filter = (elem) => {
    setFilter(data.filter(f => f.name.toUpperCase().includes(elem.target.value)))
  }

  return (
    <div className='App'>
        <div className="shadow">
          <input type="text" onChange={Filter} placeholder='Search' />
              <table className='App_table'>
                <thead className='App_thead'>
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Email</th>  
                          <th>Phone</th>  
                      </tr>  
                  </thead>
              </table>  
              <tbody>
                {filter.map((d, i) =>(
                    <tr key={i}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.phone}</td>
                    </tr>
                ))}
              </tbody>
        </div>          
    </div>
  )
}
