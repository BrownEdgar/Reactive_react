import useTodos from './hooks/useTodos';
import { Todos } from '../../contexts/Contexts';
import {GetTodos} from './components/Todos/GetTodos';
import "./App.scss";

export default function App() {
  const [todos, setTodos] = useTodos();
  
  return (
    <div className="app">
      <Todos.Provider value={{ todos, setTodos }}>
          <GetTodos/>
      </Todos.Provider>
    </div>
  );
}
