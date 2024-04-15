import { GETPOSTS, GETTODOS } from './actionType'

export const initialState = {
  arr: [98, 32, 90, 5, 43, 12, 12, 98, 484],
  todos: [],
  products: [
    {
      id: 1,
      name: 'Iphone',
      image: '/images/iphone.jpg',
      price: 1230
    }
  ],
  total: 18
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GETTODOS: return { ...state, total: action.payload} 
    case GETPOSTS: return { ...state, todos: action.payload } 
    
  
    default: return state
  }
}

export default reducer