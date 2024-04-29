import React, { useEffect, useState } from 'react'
import './App.scss'
import { MyContext } from "./contexts/Context"
import A from "./A"
import axios from 'axios'

function App() {
    const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => setTodos(res.data))
  }, []);

  const deleteId = (id) => {
    setTodos(todos.toSpliced(id, 1))
  }

  return (
    <div className='App'>
        <MyContext.Provider value={{todos}}>
             <A /> 
        </MyContext.Provider> 
      <h2 className='App__title'>Todos {todos.length || 0} count</h2>
      <ul>
        {todos.map((todo, id) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteId(id)}
            className='App__btn'>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;