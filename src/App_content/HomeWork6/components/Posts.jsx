import React, { useState, useEffect } from 'react';

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div className='box'>
      <h2>Posts</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;