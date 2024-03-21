import React, { useState } from 'react'
import './Login.scss'


function Login() {
    const[users, setUsers] = useState([
        {
            id: 1,
            username: "Roni",
            email:'RoniColeman@gmail.com'
        },
        {
            id: 2,
            username: "Arnold",
            email:'ArnoldSchwarzenegger@gmail.com'
        },
        {
            id: 3,
            username: "Kevin",
            email:'KevinLevrone@gmail.com'
        },
        {
            id: 4,
            username: "Sam",
            email:'SamSulek@gmail.com'
        }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = e.target.username.value;
        if (users.includes(user)) {
            alert("It's already there")
        } else {
            setUsers([...users, user]);
            e.target.reset()
        }
    }
  return (
    <div className='Login'>
        <form onSubmit={handleSubmit} className='Form'>
            <h1 className='Login__title'>LOGIN FORM</h1>
            <input type="text" name='username' id='user' placeholder='Username' required/>
            <input type="text" name='password' id='pass' placeholder='Password' required/>
            <input type="email" name='email' id='email' placeholder='Your Email' required/>
            <input className='Login__check' type="checkbox" name='checkbox' id='check' />
            <p className='Login__response'>Remeber Me</p>
            <button className='Login__btn'>LOGIN HERE</button>
            <p className='Login__text'>Don't Have an Account? Sign Up!</p>
        </form>
        <ul className='List'>
            {users.map(elem => {
                return (
                    <li key={elem.id}>
                        <span>{elem.username}</span>
                        <span>{elem.email}</span>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}


export default Login