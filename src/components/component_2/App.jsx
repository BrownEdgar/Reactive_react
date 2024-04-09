import React, {useState, useEffect} from 'react'
import './App.scss'

export default function Comments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/Comments?_limit=9')
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
    <div className='Comments'>
      <h1 className='Comments__title'>Our Comments</h1>
      <div className="Comments__body">
        {
          data.map(comment => {
            return (
              <div key={comment.id}>
                <h2>{comment.name}</h2>
                <p>{comment.body}</p>
                <button onClick={() => handleDelete(comment.id)}>
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
