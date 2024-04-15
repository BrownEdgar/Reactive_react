import React, { useState } from 'react'
import PropTypes from "prop-types"
import { FaHeart } from "react-icons/fa";
import "./Quote.scss"

export default function Quote({ data, handleClick, currentId, setcurrentId }) {
  return (
    <div className='Quote'>
      <button className='Quote__likeCount'><FaHeart /> <span>{currentId.length}</span></button>
        {
        data.map((quote,index) => {
          return (
            <div key={quote.id} className="Quote__holder" >
              <button className={` Quote__like ${currentId.includes(index) ? "Quote__like-like" : ""}`} onClick={() => handleClick(index)}><FaHeart /></button>
              <p className="Quote__quote">{quote.quote}</p>
              <span className='Quote__author'>{quote.author}</span>
            </div>
          )
        })
      }


    </div>
  )
}


Quote.propType = {
  data: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  currentId: PropTypes.arrayOf(PropTypes.number).isRequired,

}