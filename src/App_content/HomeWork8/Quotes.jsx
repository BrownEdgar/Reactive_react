import React, { useState, useEffect } from 'react';

function Quotes() {
        const [quotes, setQuotes] = React.useState([]);
      
        React.useEffect(() => {
          fetch('https://dummyjson.com/quotes')
            .then(response => response.json())
            .then(data => setQuotes(data.quotes));
        }, []);
      
        const handleLikeClick = (quoteId) => {
          const updatedQuotes = quotes.map(quote => {
            if (quote.id === quoteId) {
              quote.likes++;
            }
            return quote;
          });
          setQuotes(updatedQuotes);
        };
  return (
        <div>
          {quotes.map(quote => (
            <Quote
              key={quote.id}
              quote={quote.quote}
              author={quote.author}
              likes={quote.likes}
              onLikeClick={() => handleLikeClick(quote.id)}
            />
          ))}
        </div>
  )
};

  const Quote = ({ quote, author, likes, onLikeClick }) => {
    const [isLiked, setIsLiked] = React.useState(false);
  
    const handleLikeClick = () => {
      onLikeClick();
      setIsLiked(true);
    };
  
    const likeButtonClass = isLiked ? 'liked' : '';
  
    return (
      <div className="quote">
        <p>{quote}</p>
        <p>- {author}</p>
        <button className={likeButtonClass} onClick={handleLikeClick}> {likes}</button>
      </div>
    );
}
  Quote.propTypes = {
    // quote: PropTypes.string.isRequired,
    // author: PropTypes.string.isRequired,
    // likes: PropTypes.number.isRequired,
    // onLikeClick: PropTypes.func.isRequired,
};

export default Quotes