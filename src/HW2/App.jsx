import React, { useState, useEffect } from 'react';
import './App.scss'
import axios from 'axios'

const App = () => {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('');
  
    useEffect(() => {
      axios("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
    }, []);
  
    const handleSelectChange = (e) => {

      setUserId(e.target.value);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const filteredUsers = users.filter((user) => user.id === parseInt(userId));
  
    return (
      <div>
        <h1>Users</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user_id">User ID</label>
          <select name="user_id" id="user_id" onChange={handleSelectChange}>
            <option value="" disabled> Select User </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.id}
              </option>
            ))}
          </select>
        </form>
  
        {userId && (
          <div className="user-info">
            <h2>User Information</h2>
            <ul>
              {filteredUsers.map((user) => (
                <span key={user.id}>
                    <li>ID: {user.id} - {user.name}</li>
                    <li>Username: {user.username}</li>
                    <li>Email: {user.email}</li>
                    <li>Address: {user.address.street}</li>
                    <li>Suite: {user.address.suite}</li>
                    <li>City: {user.address.city}</li>
                </span>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

export default App;