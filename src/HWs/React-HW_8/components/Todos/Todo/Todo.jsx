import { useState } from "react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import Modal from "../../Modal/Modal";

import "./Todo.scss";

defineElement(lottie.loadAnimation);

export default function Todo({ data, setData }) {
  const [removeModalIsOPen, setRemoveModalIsOPen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleTrashBtn = (id) => {
    setCurrentId(id);
    setRemoveModalIsOPen(!removeModalIsOPen);
  };

  const handleCloseRemoveModal = () => {
    setRemoveModalIsOPen(!removeModalIsOPen);
    setCurrentId(null);
  };

  return (
    <>
      {removeModalIsOPen ? (
        <Modal
          data={data}
          setData={setData}
          currentId={currentId}
          handleCloseRemoveModal={handleCloseRemoveModal}
        />
      ) : null}

      {data.map((todo) => (
        <div className="todos__todo todo-todos" key={todo.id}>
          <div className="todo-todos__wrapper">
            <p className="todo-todos__text">{todo.todo}</p>
            <span className="todo-todos__text">
              {todo.completed ? "true" : "false"}
            </span>
          </div>

          <button
            className="todo-todos__trash-btn"
            onClick={() => handleTrashBtn(todo.id)}
          >
            <lord-icon
              src="https://cdn.lordicon.com/skkahier.json"
              trigger="hover"
              colors="primary:red"
            ></lord-icon>
          </button>
        </div>
      ))}
    </>
  );
}
