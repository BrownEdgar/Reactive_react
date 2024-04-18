import React, { useReducer } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './App.scss'
import reducer, { initialState } from './reducer';

export default function App() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplayedSpeed: 500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='App'>
			<Slider {...settings}>
        {
          state.data.map(elem => {
            return(
              <div key={elem.id} className='star'>
                <img src={elem.image} alt="" />
                <h1>{elem.title}</h1>
              </div>
            )
          })
        }
      </Slider>
      <button className='App__btn'>View more</button>
		</div>
  )
}
