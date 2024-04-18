import React, { useState } from 'react'

export default function useArray() {

  const useArray  = (initialState) => {
    const [data, setData] = useState(initialState);

    const filter = (elem) => {
      setData((prevState) => prevState.filter(elem));
    };

    
    const remove = (index) => {
      setData((initState) => initState.filter((_, i) => i !== index));
    };
    
    const push = (elem) => {
    setData((initState) => [...initState, elem]);
    };

    const set = () => {
      setData([1, 2])
    }

    const clear = () => {
      setData([]);
    };


    return { data, filter , push, remove, clear, set };
  };

  return (
    <div>useArray</div>
  )
}
