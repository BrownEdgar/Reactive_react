import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "@/users/usersSlice";
import axios from "axios";
import User from "./components/User/User";

import "./App.scss";
import Counter from './components/Counter/Counter';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      dispatch(setUsers(res.data))
    );
  }, []);

  return (
    <div className="App">
      <Counter/>
      <div className="users">
        <h1 className='title'>USERS</h1>
        <User />
      </div>
    </div>
  );
}
