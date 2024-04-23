import React, { useReducer } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './App.scss'
import reducer, { initialState } from './reducer';


const handleclick = () =>{
    
}

export default function App() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplayedSpeed:100,
      };
      const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="slider-container">
        <Slider {...settings}>
       {
        state.dates.map(data => {
            return(
                <div key={data.id} className='data'>
                    <div className='content'>
                        <img src={data.image} alt={data.title}/>
                        <h1>{data.title}</h1>
                        <p>{data.desc}</p>
                    </div>
                </div>
               
             
            )
        })
       }
        
      </Slider>
       
      <button onClick={handleclick}>View more</button>
    </div>
  )
}
