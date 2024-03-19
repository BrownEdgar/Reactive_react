import React from 'react'

export default function Quotes({ elem }) {
  return (
    <div>
      <pre>
        {JSON.stringify(elem, null, 2)}
      </pre>
    </div>
  )
}
