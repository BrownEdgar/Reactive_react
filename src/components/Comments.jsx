import React, { useState, useEffect } from 'react';

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className='box'>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;