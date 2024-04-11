import { ADD, SHUFFLE, REMOVE, UPDATE, AGE, DEVELOPER} from "./actionType.js";

export const initialState = {
  developers: [],
  user: {
    id: 1,
    name: "armen"
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

const shuffle = () => {
  return Math.random() - 0.5
}




function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD: return { ...state, arr: [...state.arr, action.payload]}
    case SHUFFLE: return { ...state, arr:state.arr.toSorted(shuffle)}
    case REMOVE: return { ...state, arr: state.arr.filter(elem => elem >= 10)}
    case UPDATE: return { ...state, user: { ...state.user, name: "Vzgo"}}
    case UPDATE: return { ...state, user: { ...state.user, name: "Vzgo"}}
    case AGE: return { ...state, user: { ...state.user, age: "10"}}
    case DEVELOPER: return { ...state, developers:  [...state.developers, action.payload]}
    
    default: return state
  }
}


export default reducer