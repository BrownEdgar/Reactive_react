import React from 'react'
import './Quote.scss'
import PropTypes from 'prop-types'


export default function Quote({quote}) {
  return (
    <div><h1>{title}</h1></div>
  )
}

Quote.propTypes ={
  Quote: PropTypes.exact(
    {
      id: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }
  ).isRequired
}