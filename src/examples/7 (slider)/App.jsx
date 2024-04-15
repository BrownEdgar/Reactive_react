import React, { useReducer } from 'react'
import Slider from "react-slick";
import './App.scss'
import reducer, { initialState } from './reduser';

function App() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
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
                                <div>
                                    <h1>{planet.title}</h1>
                                    <p>{planet.desc}</p>
                                </div>
                            </div>
                        );
                    })
            }
            </Slider>
        </div>
    );
}

export default App;