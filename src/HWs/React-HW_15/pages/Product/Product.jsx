import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import StarsRating from "../../components/StarsRating/StarsRating";

import "./Product.scss";

export default function Product() {
  const [product, setProduct] = useState({});
  const [descMore, setDescMore] = useState(false);

  const { id } = useParams();

  const handleDescMore = () => {
    setDescMore(!descMore);
  };

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
      setProduct(res.data)
    );
  }, []);

  return (
    <div className="product">
      <Link to="/products" className="back-btn">
        <i className="bi bi-arrow-left-circle"></i>
        <span>Back</span>
      </Link>
      <div className="product__container">
        <div className="product__img">
          <img src={product.image} alt="product-img" />
        </div>
        <div className="product__content">
          <span className="product__category">{product.category}</span>
          <h1 className="product__title">{product.title}</h1>
          <p className="product__desc">
            {descMore
              ? product.description
              : product.description?.split(" ").slice(0, 15).join(" ") + "..."}
          </p>
          <button className="product__more-btn" onClick={handleDescMore}>
            {descMore ? "close" : "read more"}
          </button>
          <div className="product__info">
            <span className="product__price">${product.price}</span>
            <span className="product__count">
              Count:{" "}
              <span className={product?.rating?.count < 30 ? "red" : "green"}>
                {product?.rating?.count}
              </span>
            </span>
          </div>
          <span className="product__range">
            <StarsRating rate={product?.rating?.rate} />
            <span>{product?.rating?.rate}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
