import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { reducer, initialState } from "../../reducer";
import { actionTypes } from "../../actionTypes";
import NFormatter from "../NFormatter";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

function SlickSlider() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [heartActive, setHeartActive] = useState(false);
  const [currIndex, setCurrIndex] = useState(null);
  const [likedCities, setLikedCities] = useState(
    JSON.parse(localStorage.getItem("likedCities"))
  );

  useEffect(() => {
    axios("http://localhost:3000/cities")
      .then((res) =>
        dispatch({ type: actionTypes.getSlides, payload: res.data })
      )
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("likedCities", JSON.stringify(likedCities));
  }, [likedCities]);

  const handleHeart = (index) => {
    setHeartActive(!heartActive);
    setCurrIndex(index);
    if (!likedCities.includes(index)) {
      setLikedCities([...likedCities, index]);
       dispatch({ type: actionTypes.addLike, payload: index });
       console.log(state.cities);
    } else {
      setLikedCities(likedCities.filter((ind) => ind != index));
      dispatch({ type: actionTypes.subTractLike, payload: index });
    }
    setCurrIndex(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {state.cities.map((slide, index) => (
          <div key={slide.id} className="slick-slide__wrapper wrapper-slide">
            <div className="wrapper-slide__image">
              <img src={slide.cityImage} alt={slide.cityName} />
              <p className="wrapper-slide__desc">{slide.cityDesc}</p>
              <div className="wrapper-slide__comments"></div>
            </div>
            <div className="wrapper-slide__content">
              <h1 className="wrapper-slide__title">{slide.cityTitle}</h1>
              <div className="wrapper-slide__actions">
                <div>
                  <i
                    className={`bi bi-heart${
                      (currIndex == index && heartActive) ||
                      likedCities.includes(index)
                        ? "-fill"
                        : ""
                    }`}
                    onClick={() => handleHeart(index)}
                  ></i>
                  <NFormatter number={slide.cityLikes} digits={3} />
                </div>
                <i className="bi bi-chat"></i>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickSlider;
