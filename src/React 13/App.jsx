import React, {  useReducer } from "react";
import Slider from "react-slick";
import './App.scss'
import reducer,{initialState} from "./reducer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true

  };

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
      <div className="App">
        <Slider {...settings}>
         {
          state.data.map(elem => {
            return(
              <div key={elem.id}>
                <img src={elem.Image} alt="elem.data" />
                <h1>{elem.title}</h1>
              </div>
            )
          })
         }
        </Slider>
      </div>
  )
}
