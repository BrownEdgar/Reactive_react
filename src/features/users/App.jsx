import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { addusers } from './usersSlice'

export default function App() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => dispatch(addusers(res.users)))
  },[])

  return (
    <div>
      {
        users.map(elem => {
          return(
            <div key={elem}>
              <h1>{elem.name}</h1>
            </div>
          )
        })
      }
    </div>
  )
}
