import React from 'react'
import './Quote.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'


export default function Quote({ quote }) {
  return (
    <div className='Quote'>
      <span className={classNames('Quote__status', {
        'Quote__status-white': quote.quote,
          'Quote__status-red': !quote.quote,
      })}>
      </span>
    </div>
  )
}

Quote.propTypes = {
  Quote: PropTypes.exact(
    {
      id: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }
  ).isRequired
}