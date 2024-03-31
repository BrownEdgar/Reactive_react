import React from 'react'
import Posts from "./Posts/Posts"
import Todos from './Todos/ToDos'
import Users from './Users/Users'
import Comments from "./Comments/Comments"
import "./App.scss"
export default function App() {
  return (
    <div className='App'>
        <Posts/>
        <Todos/>
        <div>
        <Users />
        <Comments />
        </div>
    </div>

  )
}
