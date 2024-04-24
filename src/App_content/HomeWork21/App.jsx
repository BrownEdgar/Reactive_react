import React, { useEffect, useState } from 'react'
import { MyContenxt } from './contexts/Context'
import './App.scss'
import A from './A'
import axios from 'axios'

function App() {
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => setTasks(response.data))
  }, []);

  const deleteId = (id) => {
    setTasks(tasks.toSpliced(id, 1))
  }

  return (
    <div className='App'>
        <MyContenxt.Provider value={{tasks}}>
             <A /> 
         </MyContenxt.Provider> 
      <h2 className='App__title'>Todos {tasks.length || 0} count</h2>
      <ul>
        {tasks.map((task, id) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => deleteId(id)}
            className='App__btn'>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;