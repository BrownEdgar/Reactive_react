import React, { useEffect, useState } from 'react'
import './Users.scss'

export default function Users() {
const [users, setUsers] = useState([])

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then ((res) => res.json())
  .then (users => setUsers(users))
})


  return (
    <div>Users</div>
  )
}
