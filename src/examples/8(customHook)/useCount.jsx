import React, { useEffect, useState } from 'react'

export default function useCount({ type = 'even', }) {
  const [value] = useState(() => {
    const random = Math.ceil(Math.random() * 100)
    if (type === 'even') {
      return random % 2 === 0 ? random : random + 1
    } else if (type === 'odd') {
      return random % 2 === 0 ? random + 1 : random
    }
  })
  return value
}
