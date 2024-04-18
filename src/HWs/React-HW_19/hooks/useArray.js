import { useState } from "react";

export function useArray(getArr) {
   const [array, setArr] = useState(getArr);
   
   const set = (newArr) => { 
      setArr(newArr);
   }
   
   const push = (number) => { 
      setArr([...array, number]);
   }
   
   const update = (index, numberForChange) => { 
      setArr(() => {
         return array.toSpliced(index, 1, numberForChange);
      });
   }
   
   const clear = () => { 
      setArr([]);
   }
   
   const remove = (index) => { 
      setArr(() => array.toSpliced(index, 1));
   }
   
   const filter = (callback) => { 
      setArr(() => array.filter(callback));
   }

  return {
    array,
    set,
    push,
    remove,
    filter,
    update,
    clear,
  };
}
