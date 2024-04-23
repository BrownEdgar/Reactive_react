import { PUSH, SORT } from './actionTypes'
const initialState = {
  developers: [],
  user: {
    id: 1,
    name: "Armen"
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}



// Ստեղծել կոճակներ որոնք կանեն հետևյալ գործողությունները

// - Էջում պետք է ունենալ 1 input և այտեղ գրված անունը պետք է ավելացնել `developers` զանգվածի մեջ
// - Խառնել arr զանգվածը(shuffle)։
// - arr զանգվածի մեջ ավելացնել պատահական եռանիշ թիվ
// - arr զանգվածի մեջից ջնջել 10-ից փոքր էլեմենտները
// - փոխել user օբյեկտի name հատկությունը
// - ավելացնել user օբյեկտի մեջ նոր age հատկություն



const getSort = (state, sortType) => {
  return sortType === 'asc' ?
    state.toSorted((a, b) => a - b) :
    state.toSorted((a, b) => b - a)
}

function reducer(state, action) {
  switch (action.type) {
    case PUSH: return {...state, data: [...state.data , 5]}
    case SORT: return getSort(state, action.payload) 


    default: return state
  }
}

export default reducer