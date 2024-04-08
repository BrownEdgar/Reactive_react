import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Lessons/Lesson14/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'


ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <App />
    </Router>
);
