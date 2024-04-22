import { useContext, useState } from "react";
import { Todos } from "../../../../contexts/Contexts";

import "./GetTodos.scss";

export function GetTodos() {
  const { todos, setTodos } = useContext(Todos);
  const [trashDragEnter, setTrashDragEnter] = useState(false);

  const handleReverseCompleted = (id) => {
    const copyTodos = [...todos];
    const findedTodo = copyTodos[todos.findIndex((todo) => todo.id == id)];

    findedTodo.completed = !findedTodo.completed;
    setTodos(copyTodos);
  };

  const handleDeleteTodo = (e, id) => {
    const X = e.clientX;
     const Y = e.clientY;
     
    const { offsetWidth } = document.body;

    const diff = 110;
    const limit = offsetWidth - diff;

    if (X >= limit && X <= offsetWidth && Y >= 0 && Y <= diff) {
      setTodos(todos.filter((todo) => todo.id != id));
    }
  };

  return (
    <div className="todos">
      <h1 className="todos__title">TODOS</h1>
      <button
        className={`todos__delete-btn ${trashDragEnter ? "active" : ""}`}
        onDragEnter={() => setTrashDragEnter(true)}
      >
        <i className="bi bi-trash3-fill"></i>
      </button>
      {todos.map((todo) => (
        <div
          className="todo"
          key={todo.id}
          draggable={true}
          onDragEnd={(e) => {
            handleDeleteTodo(e, todo.id);
            setTrashDragEnter(false);
          }}
        >
          <span className="todo__id">{todo.id}</span>
          <h1 className="todo__title">{todo.title}</h1>
          <div className="todo__completed">
            <span
              className={`todo__completed-item todo__completed-item_first ${
                todo.completed ? "true" : "false"
              }`}
            >
              {todo.completed ? "Yes" : "No"}
            </span>
            <span
              className={`todo__completed-item todo__completed-item_second ${
                todo.completed ? "false" : "true"
              }`}
              onClick={() => handleReverseCompleted(todo.id)}
            >
              {todo.completed ? "No" : "Yes"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
