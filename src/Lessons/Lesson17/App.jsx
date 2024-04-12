import React, { useReducer, useState } from 'react'
import reducer, { initialState } from "./reducer";
import { useEffect } from "react";
import axios from "axios";
import './App.scss'

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _limit: 10
            }
        }).then(res => dispatch({type: 'add-posts', payload: res.data}));
    }, [])

    const deleteId = (id) => {
    setPosts(posts.toSpliced(id, 1))
  }

    return (
        <div className="App">
            <code>{JSON.stryingify(state, null, 3)}</code>
            <button onClick={() => dispatch({ type: "change-id" })}>
                Change ID
            </button>
            <button onClick={() => dispatch({ type: "delete-by-id", payload: 36 })}>
                Delete By ID
            </button>
        </div>
    );
}

export default App;