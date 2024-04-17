import React, { useReducer } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './App.scss'
import reducer, { initialState } from './reducer';

export default function App() {
  const settings = {
    dots: false,
    draggable: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    pauseOnHover: false,
    centerMode: true,



  };
  const [state, dispatch] = useReducer(reducer, initialState,)
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          state.planets.map(planet => {
            return (
              <div key={planet.id} className='planet' >
                <img src={planet.image} alt={planet.title} />

              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}
