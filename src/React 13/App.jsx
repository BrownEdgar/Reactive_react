import React, {  useReducer } from "react";
import Slider from "react-slick";
import './App.scss'
import reducer,{initialState} from "./reducer";


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
          state.data.map(data => {
            return(
              <div key={data.id}>
                <img src="{elem.Image}" alt="elem.title" />
                <h1>{data.title}</h1>
              </div>
            )
          })
         }
        </Slider>
      </div>
  )
}
