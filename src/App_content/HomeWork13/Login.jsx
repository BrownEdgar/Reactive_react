import React, { useState } from 'react'
import axios from 'axios';
import Users from './Users';
import './Login.scss'

function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, username, password });
  };

  // const [users, setusers] = useState([]);

  // useEffect(() => {
  //   axios("https://jsonplaceholder.typicode.com/users")
  //   .then( res => setusers(res.data))
  // }, []);

  return (
    <div className='LoginForm'>
      <form onSubmit={handleSubmit}>
        <div className='LoginForm__email'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='LoginForm__username'>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className='LoginForm__password'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
        {/* <div className='Users__fix'>
          {
            users.map((user) => {
              return (
                <Users user={user} key={user.id} />
              )
            })
          }
      </div> */}
    </div>
  );
}

export default LoginForm