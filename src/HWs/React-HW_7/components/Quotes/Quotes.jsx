import { useState } from "react";
import classNames from "classnames";
import "./Quotes.scss";

export default function Quotes({ data }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [likedQuotesIds, setLikedQuotesIds] = useState([]);

  const handleLeftClick = () => {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currIndex < data.length - 1) {
      setCurrIndex(currIndex + 1);
    }
  };

  const handleLike = (index) => {
    if (!likedQuotesIds.includes(index)) {
      setLikedQuotesIds([...likedQuotesIds, index]);
    } else {
      setLikedQuotesIds(likedQuotesIds.filter((elem) => elem !== index));
     }
   };

  return (
    <div className="quotes">
      {data.map((quote, index) => (
        <div
          className={`quotes__quote ${
            index === currIndex ? "visible" : "hidden"
          }`}
          key={quote.id}
        >
          <button
            className="quotes__like-btn"
            onClick={() => handleLike(index)}
          >
               <i className={classNames("fa-heart", {
                  "fa-solid": likedQuotesIds.includes(index),
                  "fa-regular": !likedQuotesIds.includes(index)
            })}></i>
          </button>

          <div
            className={`arrow-left arrow ${currIndex === 0 ? "disable" : ""}`}
            onClick={handleLeftClick}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="quotes__body">
            <i className="fa-solid fa-quote-left"></i>
            <p>{quote.quote}</p>
            <i className="fa-solid fa-quote-right"></i>
          </div>
          <span className="quotes__author">{quote.author}</span>
          <div
            className={`arrow-right arrow ${
              currIndex === data.length - 1 ? "disable" : ""
            }`}
            onClick={handleRightClick}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      ))}
    </div>
  );
}
