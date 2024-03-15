<<<<<<< HEAD:src/Apply.jsx
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
=======
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Tasks from './Todos';
import Comments from './Comments';
import Users from './Users';
import Messages from './Posts';
import './Apply.css'

function App() {
  return (
    <div className="App">
      <Tasks />
      <Comments />
      <Users />
      <Messages />
    </div>
  );
>>>>>>> 0576d02700211bd8bcfcc6b78e811e236c008bcc:src/App_content/HomeWork6/components/Apply.jsx
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
