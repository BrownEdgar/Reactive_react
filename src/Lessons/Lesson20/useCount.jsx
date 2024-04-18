import React, { useState } from 'react'

function useCount({ initialValue = 0, min = 3, max = 12 }) {
    const [value, setValue] = useState(initialValue);
    const plus = () => setValue(value < max ? value + 1 : max)
    const minus = () => setValue(value > min ? value - 1 : min)
    return [value, { plus, minus}]
}

export default useCount;