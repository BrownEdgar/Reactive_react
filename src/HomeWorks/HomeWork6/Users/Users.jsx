import React, { useEffect, useState } from 'react'
import "./Users.scss"
export default function Users() {

  const [photo, setphoto] = useState(["https://images.unsplash.com/profile-fb-1510470021-e5d0dd46e0d1.jpg?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", "https://images.unsplash.com/profile-1569790029351-5adb76747654image?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", "https://images.unsplash.com/profile-fb-1653373456-797ea9767d80.jpg?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", "https://images.unsplash.com/profile-fb-1457370155-d7b538b3cc10.jpg?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", "https://images.unsplash.com/profile-fb-1554485110-f00d4bc42f04.jpg?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", "https://images.unsplash.com/profile-1571668304856-5f26941cf7bdimage?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", "https://images.unsplash.com/profile-1680833111832-304d2a761916image?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", "https://images.unsplash.com/profile-fb-1564687866-1a69213f9292.jpg?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", "https://images.unsplash.com/profile-fb-1698871304-06463728b977.jpg?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", "https://images.unsplash.com/profile-fb-1599679820-b5e752e2e9a6.jpg?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"])




  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
        .then(data => setUsers(data))
    }
    getUsers()

  }, [])

  return (
    <div className='Users'>
      <h1 className='Users__title'>Our Users</h1>
      <div className="Users__info">{
        <ul>
          {
            users.map((user, index) => {
              return (
                <li key={user.id}>
                  <img src={photo[index]} alt="" key={index} />
                  <div>
                    <h2>{user.name}</h2>
                    <p>{user.address.city}, {user.address.street}, {user.address.suite}</p>
                    <p>Working in {user.company.name}</p>
                    <br />
                    <p>Здесь могла быть ваша реклама</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      }</div>
    </div>
  )
}
