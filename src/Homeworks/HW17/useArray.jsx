import React, { useState, useEffect } from 'react'

export function useArray(getArr) {
   const [array, setArray] = useState(getArr);

   const push = (n) => { 
      setArray([...array, n]);
   }

   const update = (index, n) => { 
      setArray(() => {
         return array.toSpliced(index, 1, n);
      });
   }

   const remove = (index) => { 
      setArray(() => array.toSpliced(index, 1));
   }
   const filter = (n) => { 
      setArray(() => array.filter(n));
   }

   const clear = () => { 
      setArray([]);
   }

  return {
    array,
    push,
    remove,
    filter,
    update,
    clear,
  };
}