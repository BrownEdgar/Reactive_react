import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useTodos() {
   const [todos, setTodos] = useState([]);

   useEffect(() => {
      axios("https://jsonplaceholder.typicode.com/todos")
        .then(res => setTodos(res.data));
   }, [])
   
   return [todos, setTodos];
}
