import { useReducer } from "react";
import reducer, { initialState } from "./reducer.js";

import "./App.scss";
import AddDispatch from './AddDispatch.js';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <code className='app__code'>
        <span>{JSON.stringify(state)}</span>
        <button><i className="bi bi-clipboard"></i></button>
      </code>
      <div className='app__btns'>
        <button onClick={() => AddDispatch.handleAddRndNumber(dispatch)}>Add Random Number</button>
        <button onClick={() => AddDispatch.handleShuffle(dispatch)}>Shuffle Array</button>
        <button onClick={() => AddDispatch.handleDelete(dispatch)}>Delete</button>
        <button onClick={() => AddDispatch.handleRename(dispatch)}>Rename User</button>
        <button onClick={() => AddDispatch.handleUserAge(dispatch)}>Add User Age</button>
        <form onSubmit={(e) => AddDispatch.handleAddUser(e, dispatch)}>
          <input type="text" placeholder="Write a username" name="username" />
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
}
