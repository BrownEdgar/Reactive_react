import React, { useState } from 'react'

export default function useArray(initialValue) {
    const [value, setValue] = useState(initialValue)
    const push = () => setValue(value.push(7))
    return[value, {push}]
}
