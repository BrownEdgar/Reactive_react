////////////////////////
// պետք է ինքնուրույն ստեղծել useArray hook-ը, բոլոր նշված մեթոդներով։
// Օրինակ update(1, 9) ֆունկցիան զանգվածի 2-րդ թիվը փոխարինելու է 9-ով => [1, 9, 3, 4, 5, 6,]
////////////////////////

import { useArray } from './useArray';
import './App.scss'

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);

  return (
    <div className="App">
      <h1>{array.join(", ")}</h1>
      <div className="App__btn">
        <button onClick={() => push(7)}>Add 7</button>
        <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
        <button onClick={() => remove(1)}>Remove Second Element</button>
        <button onClick={() => filter((n) => n < 4)}>
          Keep Numbers Less Than 4
        </button>
        {/* <button onClick={() => set([1, 2])}>Set To 1, 2</button> */}
        <button onClick={clear}>Clear</button>

      </div>
    </div>
  );
}
