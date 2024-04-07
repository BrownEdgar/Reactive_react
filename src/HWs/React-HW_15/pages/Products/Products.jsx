import { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import "./Products.scss";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const [cartIsOpen, setCartIsOpen] = useState(false);

  const handleChangeCategory = (e) => {
    const { value } = e.target;

    axios("https://fakestoreapi.com/products").then((res) => {
      if (value === "all") {
        setProducts(res.data);
      } else {
        setProducts(res.data.filter((product) => product.category === value));
      }
    });
  };

  const handleAddToCart = (id) => {
    const productForAddCart = products.find((product) => product.id === id);
    setCartProducts([...cartProducts, productForAddCart]);
  };

  console.log(cartProducts);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) =>
      setProducts(res.data)
    );
  }, []);

  return (
    <section className="products">
      <div className="products__container">
        <div className="products__top top-products">
          <button className="products__filter-btn">
            <i className="bi bi-funnel"></i>
            <select
              defaultValue="select"
              name="category"
              onChange={(e) => handleChangeCategory(e)}
            >
              <option value="select" hidden disabled>
                Select a category
              </option>
              <option value="all">All</option>
              <option value="jewelery">Jewelery</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="electronics">Electronics</option>
              <option value="men's clothing">Men's clothing</option>
            </select>
          </button>

          <div className="top-products__user-info">
            <Link to="">
              <i className="bi bi-heart"></i>
            </Link>
            <Link to="">
              <i
                className="bi bi-bag"
                onClick={() => setCartIsOpen(!cartIsOpen)}
              ></i>
            </Link>
            <Link to="">
              <i className="bi bi-person-circle"></i>
            </Link>

            <div className={`cart ${cartIsOpen ? "cart_opened" : ""}`}>
              {cartProducts.length ?
                cartProducts.map((product) => (
                  <div className="cart__product product-cart" key={product.id}>
                    <div className="product-cart__img">
                      <img src={product.image} alt="cart-product" />
                    </div>
                    <div className="produc-cart__info">
                      <div className="product-cart__title">{product.title}</div>
                      <div className="product-cart__price">${product.price}</div>
                    </div>
                  </div>
                ))
                : <span>No product</span>}
            </div>
          </div>
        </div>
        <div className="products__content">
          {products.map((product) => (
            <div className="products__card-body card-body" key={product.id}>
              <Link to={`/products/${product.id}`} className="card-body__img">
                <img src={product.image} alt="product-img" />
                <span>{product.category}</span>
              </Link>
              <Link to={`/${product.id}`} className="card-body__title">
                {product.title}/
              </Link>
              <button
                className="add-cart-btn"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
