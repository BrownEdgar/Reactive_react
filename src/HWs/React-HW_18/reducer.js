import axios from 'axios';
import { actionTypes } from "./actionTypes";

const initialState = {
  cities: [],
};

const setCities = (payload) => {
  const cities = payload.map((city) => {
    return {
      id: city.id,
      cityImage: city.cityImage,
      cityTitle: city.cityTitle,
      cityDesc: city.cityDesc,
      cityDate: city.cityDate,
      cityLikes: city.cityLikes,
      cityComments: city.cityComments,
    };
  });

  return cities;
};

const addLike = (state, payload) => {
   state.cities[payload].cityLikes += 1;
  return { ...state, cities: state.cities };
};

const subTractLike = (state, payload) => {
  state.cities[payload].cityLikes -= 1;
  return { ...state, cities: state.cities };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.getSlides:
      return { ...state, cities: setCities(action.payload) };
    case actionTypes.addLike:
      return addLike(state, action.payload);
    case actionTypes.subTractLike:
      return subTractLike(state, action.payload);

    default:
      return state;
  }
}

export { initialState, reducer };
