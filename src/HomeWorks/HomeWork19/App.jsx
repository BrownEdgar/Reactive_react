import React, { useReducer } from "react";
import Slider from "react-slick";
import "./App.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reducer, { initialState } from './reducer';

export default function App() {
  const [state, dispatch] = useReducer( reducer, initialState )

  const settings = {
    dots: true,
    pauseOnFocus: true,
    pauseOnHover: false,
    autoplay: false,
    autoplaySpeed: 1100,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          state.posts.map(post => {
            return (
              <div key={post.id} className="post">
                <img src={post.image} alt={post.title} />
               <div className='text'>
                  <h3>{post.title}</h3>
                  <p>{post.date}</p>
               </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}
