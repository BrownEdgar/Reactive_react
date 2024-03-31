import { useEffect } from "react";
import { useState } from "react";
import { waveform } from "ldrs";

waveform.register();

import "./Users.scss";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/users?_limit=9")
        .then((res) => res.json())
        .then((data) => setData(data));
    };

    getData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <section className="users">
      <div className="users__container _container">
        <div className="users__title title">Users</div>
        <div className="users__row">
          {data.length ? (
            data.map((user) => (
              <article className="users__column column-users" key={user.id}>
                <div className="column-users__circles">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="column-users__name">
                  <span>{user.name}</span>
                  <span>({user.username})</span>
                </div>
                <div className="column-users__image">
                  <img src="/images/user-example.png" alt="User Image" />
                </div>
                <div className="column-users__info">
                   <div className="column-users__email">Email: {user.email}</div>
                   <div className="column-users__address">
                     <span>Street : {user.address.street}</span>
                   </div>
                   <div className="column-users__phone">
                     <span>Phone : {user.phone.slice(0, user.phone.lastIndexOf(" "))}</span>
                   </div>
                </div>
                <img
                  src="/icons/Delete.svg"
                  alt="Delete"
                  className="column-users__delete-btn"
                  onClick={() => handleDelete(user.id)}
                />
              </article>
            ))
          ) : (
            <l-waveform
              class="users__ldrs"
              size="35"
              stroke="3.5"
              speed="1"
              color="black"
            ></l-waveform>
          )}
        </div>
      </div>
    </section>
  );
}
