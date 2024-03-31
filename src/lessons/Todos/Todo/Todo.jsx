import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Todo.scss'

export default function Todo({ todo, toggleStatus }) {
  return (
    <div className='Todo' onClick={toggleStatus}>
      <span className={classNames('Todo__status', {
        'Todo__status-green': todo.completed,
        'Todo__status-red': !todo.completed,
      })}></span>
      <h1 className='Todo__title'>{todo.title}</h1>
    </div>
  )
}


Todo.propTypes = {
  todo: PropTypes.exact(
    {
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }
  ).isRequired
}