import React, { useEffect, useState } from 'react'
import './App.scss'
import Todo from './Todo/Todo'
import axios from 'axios'


function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => setData(response.data)
        );
    }, []);

  return (
      <div className='App'>
          {
              data.map(todo => {
                  return <Todo todo={todo} key={todo.id} />    
              })
          }
          <Todo title="main todo title" arr={[3, 4, 2, "s"]} />
    </div>
  )
}

export default App