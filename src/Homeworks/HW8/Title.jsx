import React from 'react'
import PropTypes from 'prop-types'
import './Title.scss'
import classNames from 'classnames'


export default function Title({title, variant, center, right}) {
  return (
    <h1 className={classNames('Title', {
      [`Title-${variant}`]: true,
      ['Title-center']: center,
      ['Title-right']: right,
    })}>{title}</h1>
  )
}

Title.defaultProps = {
  title: 'default title',
  variant: 'dark'
}

Title.protoTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(['dark, light'])
}