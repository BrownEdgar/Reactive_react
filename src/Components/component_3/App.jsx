import React, {useState, useEffect} from 'react'
import './App.scss'

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/Users?_limit=9')
        .then((res) => res.json())
        .then(data => setData(data))
    }
    getData()
  }, [])

  const handleDelete = (id) => {
    const result = data.filter(elem => elem.id !== id)
    setData(result)
  }

  return (
    <div className='Users'>
      <h1 className='Users__title'>Our Users</h1>
      <div className="Users__body">
        {
          data.map(user => {
            return (
              <div key={user.id}>
                <h1>{user.name}</h1>
                <h3>{user.username}</h3>
                <h2>{user.email}</h2>
                <button onClick={() => handleDelete(user.id)}>
                  <i className='bx bxs-message-square-x bx-md'></i>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
