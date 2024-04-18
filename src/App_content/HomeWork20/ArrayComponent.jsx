import React from "react";
import useArray from "./useArray";
import './ArrayComponent.scss'

function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([ 1, 2, 3, 4, 5, 6, ]);

  return (
    <div className="Array">
      <div className="Arr">{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change the second element to 9</button>
      <button onClick={() => remove(1)}>Delete the second element</button>
      <button onClick={() => filter(n => n < 3)}>Leave the numbers less than 4</button>
      <button onClick={() => set([1, 2])}>Set 1, 2</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default ArrayComponent;