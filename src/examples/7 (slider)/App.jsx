import React, { useReducer } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'
import reducer, { initialState } from './reduser';

function App() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        draggable: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        pauseOnHover: false,
        centerMode: true,
    };
     const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    state.planets.map(planet => {
                        return (
                            <div className='planet' key={planet.id}>
                                <img src={planet.image} alt={planet.image} />
                                {/* <div>
                                    <h1>{planet.title}</h1>
                                    <p>{planet.desc}</p>
                                </div> */}
                            </div>
                        );
                    })
            }
            </Slider>
        </div>
    );
}

export default App;