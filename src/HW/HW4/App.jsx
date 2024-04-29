import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plus, minus } from './features/Counter/counterSlice';
import { fetchUsers } from './Users/usersSlice';
import axios from 'axios';
import './App.scss';

export default function App() {
  const counter = useSelector((state) => state.counter);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => dispatch(fetchUsers(res.data)))
  }, []);

  return (
    <div className='App'>
      <h1>Counter: {counter}</h1>
      <div className='buttons'>
        <button onClick={() => dispatch(minus(2))}>MINUS</button>
        <button onClick={() => dispatch(plus(2))}>PLUS</button>
      </div>
      <div className='Users'>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <p>Phone: {user.phone}</p>
                <p>Address: {user.address.city}, {user.address.street}, {user.address.suite}, {user.address.zipcode}</p>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

