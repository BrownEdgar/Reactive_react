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
                <h2>{user.title}</h2>
                <p>{user.body}</p>
                <button>
                  <i
                    className='bx bxs-message-square-x bx-md'
                    onClick={() => handleDelete(user.id)}>
                  </i>
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
