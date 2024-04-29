import React, {useReducer} from 'react'


function reducer(state, action) {
    switch(action.type) {
        case "plus" : return state + action.payload;
        case "minus" : return state - 1;
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, 0)
    const handeleClick = () => {
        dispatch({type:"minus"})
    }
    
    const handeleClicks = () => {
        dispatch({type:"plus", payload:4})
    }

    
  return (
    <div className='App'>
        <h1>state{state}</h1>
        <button onClick={handeleClick}>minus</button>
        <button onClick={handeleClicks}>plus</button>
    </div>

  )
}
