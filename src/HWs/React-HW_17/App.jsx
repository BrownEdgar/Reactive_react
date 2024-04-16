import { useReducer } from "react";
import { reducer, initialState } from "./reducer.js";
import { AddDispatch } from "./AddDispatch.js";

import "./App.scss";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <button onClick={() => AddDispatch.handleGetTodos(dispatch)}>
        Get Todos
      </button>
      <div>
        {console.log(state)}
        {state.todos.length ? state.todos.map((todo) => <h1 key={todo}>{todo}</h1>) : null}
      </div>
    </div>
  );
}
