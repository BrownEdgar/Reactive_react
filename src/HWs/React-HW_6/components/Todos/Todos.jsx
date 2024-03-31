import { useState, useEffect } from "react";
import axios from "axios";
import MyLoader from "../Loader/Loader";
import "./Todos.scss";

export default function Todos() {
  const [data, setData] = useState([]);
  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getData = () => {
      axios("https://jsonplaceholder.typicode.com/todos?_limit=9")
        .then((res) => setData(res.data))
        .finally(setLoading(false));
    };

    getData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleToDo = (index) => {
    setComplete(!complete);
    data[index].completed = true;
  };

  return (
    <section className="todos">
      <div className="todos__container _container">
        <div className="todos__title title">Todos</div>
        <div className="todos__row">
          {!loading ? (
            data.map((todo, index) => (
              <article className="todos__column column-todos" key={todo.id}>
                <div className="column-todos__circles">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="column-todos__title">{todo.title}</div>
                <div className="column-todos__desc">{todo.body}</div>
                <span
                  className={
                    todo.completed
                      ? "column-todos__completed_true"
                      : "column-todos__completed_false"
                  }
                >
                  {todo.completed ? "Completed" : "Don't complete"}
                </span>
                <img
                  src="/icons/Delete.svg"
                  alt="Delete"
                  className="column-todos__delete-btn"
                  onClick={() => handleDelete(todo.id)}
                />
                <span
                  className="column-todos__todo-btn"
                  onClick={() => handleToDo(index)}
                >
                  {!todo.completed ? "DO" : null}
                </span>
              </article>
            ))
          ) : (
            <>
              <MyLoader />
              <MyLoader />
              <MyLoader />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
