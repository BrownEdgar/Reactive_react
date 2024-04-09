import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("use effect run")
        const getData = () => {
            fetch("https://jsonplaceholder.typicode.com/posts?_limit=9")
                .then((response) => response.json())
                .then((json) => setData(json));
        };
        getData();
    }, []);

    return (
        <div className="App">
            <h1>Our post</h1>
            <div className="App__posts">
                {
                    data.map((post) => {
                    return (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <button>
                              <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    );
                    })
                }
            </div>
        </div>
    );
}

export default App;
