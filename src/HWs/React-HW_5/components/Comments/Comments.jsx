import { useEffect } from "react";
import { useState } from "react";
import { waveform } from "ldrs";

waveform.register();

import "./Comments.scss";

export default function Comments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=9")
        .then((res) => res.json())
        .then((data) => setData(data));
    };

    getData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  return (
    <section className="comments">
      <div className="comments__container _container">
        <div className="comments__title title">Comments</div>
        <div className="comments__row">
          {data.length ? (
            data.map((comments, index) => (
              <article className="comments__column column-comments" key={comments.id}>
                <div className="column-comments__circles">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="column-comments__title">{comments.name}</div>
                <div className="column-comments__desc">{comments.body}</div>
                <img
                  src="/icons/Delete.svg"
                  alt="Delete"
                  className="column-comments__delete-btn"
                  onClick={() => handleDelete(comments.id)}
                />
              </article>
            ))
          ) : (
            <l-waveform
              class="comments__ldrs"
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
