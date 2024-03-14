import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Tasks from './Todos';
import './App.scss'

function App() {
  return (
    <div className="App">
      <Tasks />
    </div>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  