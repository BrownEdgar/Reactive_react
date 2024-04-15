 import { SORT } from "./types"
 
 
 export const initialState = {
    arr: [98,32,90,5,43,12,12,98,484],
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

    
    
  const getSort = (state, sortType) => {
    return sortType === 'asc'
    ? state.toSorted((a, b) => a - b)
    : state.toSorted((a, b) => b - a)
  }


function reducer(state = initialState, total) {
    switch(total.type){
        case 'add-todos': return {...state, todos: total.payload}
        case SORT: return getSort(state.payload)
        default: return state;
    }
}

export default reducer