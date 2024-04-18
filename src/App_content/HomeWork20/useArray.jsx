import React, { useState } from 'react';

const useArray = (initialState) => {
  const [array, setArray] = useState(initialState);

  const push = (item) => {
    setArray((prevState) => [...prevState, item]);
  };

  const remove = (index) => {
    setArray((prevState) => prevState.filter((_, i) => i !== index));
  };

  const filter = (predicate) => {
    setArray((prevState) => prevState.filter(predicate));
  };

  const update = (index, newValue) => {
    setArray((prevState) => {
      const updatedArray = [...prevState];
      updatedArray[index] = newValue;
      return updatedArray;
    });
  };

  const clear = () => {
    setArray([]);
  };

  const set = () => {
    setArray([1, 2])
  }

  return { array, set, push, remove, filter, update, clear };
};

export default useArray;