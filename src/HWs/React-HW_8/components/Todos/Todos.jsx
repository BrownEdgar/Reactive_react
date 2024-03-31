import { useEffect, useState } from "react";
import Todo from './Todo/Todo';
import axios from "axios";

import "./Todos.scss";

export default function Todos() {
  const [data, setData] = useState([]);
   const DB_URL = import.meta.env.VITE_DB_URL;

  useEffect(() => {
    axios("https://dummyjson.com/todos?limit=18").then((res) => setData(res.data.todos));

    return () => {};
  }, []);

  return (
    <div className="todos">
      <div className="todos__container">
           <div className="todos__body">
              <Todo data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
}
