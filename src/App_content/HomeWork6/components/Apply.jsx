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
}

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  