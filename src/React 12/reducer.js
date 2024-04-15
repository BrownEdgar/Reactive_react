const initialState = {
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
  const Sorted = (state,sortarr) => {
    return sortarr === 'sort' ?
    state.toSort((a,b) => a-b):
    state.toSort((a,b) => b-a)
  }

function reducer(state =  initialState,action) {
  switch (action.type) {
    case 'add-todos':return {...state, todos:action.payload}
    case SORT: return getSort(state, action.payload) 
    default: return state;
  }
}

export default reducer