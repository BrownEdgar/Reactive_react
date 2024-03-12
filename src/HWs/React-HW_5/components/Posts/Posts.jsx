import { useEffect } from "react";
import { useState } from "react";
import { waveform } from "ldrs";

waveform.register();

import "./Posts.scss";

export default function Posts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=9")
        .then((res) => res.json())
        .then((data) => setData(data));
    };

    getData();
  }, []);
   
   const handleDelete = (id) => {
      setData(data.filter(item => item.id !== id));
   }

  return (
    <section className="posts">
      <div className="posts__container _container">
        <div className="posts__title title">Our Posts</div>
        <div className="posts__row">
          {data.length ? (
            data.map((post) => (
              <article className="posts__column column-posts" key={post.id}>
                <div className="column-posts__circles">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="column-posts__title">{post.title}</div>
                <div className="column-posts__desc">{post.body}</div>
                <img
                  src="/icons/Delete.svg"
                  alt="Delete"
                  className="column-posts__delete-btn"
                  onClick={() => handleDelete(post.id)}
                />
              </article>
            ))
          ) : (
            <l-waveform
              class="posts__ldrs"
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
