import React from 'react'
import PropTypes from 'prop-types'
import './Title.scss'
import classNames from 'classnames'

export default function Title({ title, variant, center, size, as }) {
  const Element = as;
  return (
    <Element className={classNames("Title", {
      [`Title-${variant}`]: true, [`Title-${size}`]: true, 'Title-center': center
    })}>
      {title}
    </Element>
  )
}


Title.defaultProps = {
  title: 'default title',
  variant: 'dark',
  size: 'md',
  as: 'h1',
}

Title.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(['dark', 'light', 'polo']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}