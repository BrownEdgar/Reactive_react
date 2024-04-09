import React, { useState, useEffect } from 'react';
import './App.scss'

const App = () => {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('');
  
    useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      };
      fetchUsers();
    }, []);
  
    const handleSelectChange = (e) => {
      setUserId(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const filteredUsers = users.filter((user) => user.id <= parseInt(userId));
  
    return (
      <div>
        <h1>Users</h1>
        <form onSubmit={handleSubmit}>
          <label for="user_id">User ID</label>
          <select name="user_id" id="user_id" onChange={handleSelectChange}>
            <option value="" disabled>-- Select User --</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.id}
              </option>
            ))}
          </select>
          <input type="submit" value="Select" />
        </form>
  
        {userId && (
          <div className="user-info">
            <h2>User Information</h2>
            <ul>
              {filteredUsers.map((user) => (
                <li key={user.id}>
                    <span>ID: {user.id} - {user.name}</span>
                    <br />
                    <span>Username:{user.username}</span>
                    <br />
                    <span>Email:{user.email}</span>
                    <br />
                    <span>Address:{user.address.street}</span>
                    <br />
                    <span>Suite:{user.address.suite}</span>
                    <br />
                    <span>City:{user.address.city}</span>
                    <br />
                    <span>Zipcode:{user.address.zipcode}</span>
                    <br />
                    <span>Phone:{user.phone}</span>
                    <br />
                    <span>Website:{user.website}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

export default App;