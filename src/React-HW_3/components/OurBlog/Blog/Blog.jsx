import { useState } from "react";
import "./Blog.css";

export default function Blog() {
  const [blogContent, setBlogContent] = useState([
    {
      id: 1,
      title: "Aliquam Hendrerit  Mi Metus",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, unde atque. Voluptas voluptatibus nobis distinctio ex...",
      desc2:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere commodi quis officiis. Consectetur, facilis eos.",
      data: "01 AUG, 2019",
    },
    {
      id: 2,
      title: "Mauris Vulputate CRas Amet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga vel accusamus temporibus error aperiam odio nesciunt explicabo...",
      desc2:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere commodi quis officiis. Consectetur, facilis eos.",
      data: "13 APR, 2018",
    },
    {
      id: 3,
      title: "Suspendisse Nullam Sodales",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nulla veniam iusto tenetur et voluptatibus corrupti fugiat, harum soluta...",
      desc2:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere commodi quis officiis. Consectetur, facilis eos.",
      data: "29 OCT, 2021",
    },
  ]);

  const [isOpen, setIsOPen] = useState(false);
  const [moreInfoIndex, setMoreInfoIndex] = useState(null);

  const handleClick = (index) => {
    setMoreInfoIndex(index);
    setIsOPen(!isOpen)
  }

  return (
    <>
      {blogContent.map((blog, index) => (
        <div className="content__blog-card card-blog" key={blog.id}>
          <div className="card-blog__data">
            <span>axonvip | </span>
            <span>{blog.data}</span>
          </div>
          <div className="card-blog__title">{blog.title}</div>
          <div className="card-blog__desc">{blog.desc}</div>
          <div
            className={
              moreInfoIndex === index && isOpen
                ? "card-blog__desc opened"
                : " card-blog__desc hide"
            }
          >
            {blog.desc2}
          </div>
          <button className="card-blog__btn" onClick={() => handleClick(index)}>
            {moreInfoIndex === index && isOpen ? "Hide Text" : "Read More"}
          </button>
        </div>
      ))}
    </>
  );
}
