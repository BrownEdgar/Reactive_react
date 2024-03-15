import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Tasks from "./components/Todos";
import Comments from "./components/Comments";
import Users from "./components/Users";
import Messages from "./components/Posts";
import "./Apply.css";

function App() {
    return (
        <div className="App">
            <Tasks />
            <Comments />
            <Users />
            <Messages />
        </div>
    );
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
