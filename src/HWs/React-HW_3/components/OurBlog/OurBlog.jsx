import Blog from './Blog/Blog';
import './OurBlog.css'

export default function OurBlog() {
  return (
    <section className="blog">
      <h1 className="blog__title">Our Blog</h1>
      <div className="blog__content">
        <Blog />
      </div>
    </section>
  );
}
