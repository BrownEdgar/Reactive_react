import React, { lazy, useReducer } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './App.scss'
import reducer, { initialState } from './reducer';

function App() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='slider-container'>
        <Slider {...settings}>
            {
                state.usa.map(usa => {
                    return (
                        <div className='usa-content'>
                            <div key={usa.id} className="usa">
                                <div className='image'>
                                    <img src={usa.image} alt="usa.jpg"/>
                                    <h1>{usa.title}</h1>
                                    <p className='desc'>{usa.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
      </Slider>
        <div className='slider-btn'>
            <div>
                <button className='btn'>View more</button>
            </div>
        </div>
    </div>
  )
}

export default App