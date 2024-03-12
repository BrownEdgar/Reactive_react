import React, {useState, useEffect} from 'react'
import './App.scss'

export default function Posts() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
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
      <div>App</div>
    )
}
