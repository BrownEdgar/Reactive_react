import { useSelector } from "react-redux";
import { getUsers } from "@/users/usersSlice";

import "./User.scss";

export default function User() {
  const users = useSelector(getUsers);

  return (
    <div className="user">
      {users.map((user) => (
        <div className="user__info" key={user.id}>
          <img className='user__image' src="/icons/9131529.png" alt="user" />
          <div className='user__name'>
            <h1>{user.name}</h1>
            <h3 className="user__username">{user.username}</h3>
          </div>
          <span className="user__email">{user.email}</span>
        </div>
      ))}
    </div>
  );
}
