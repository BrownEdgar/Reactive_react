import { ADDUSER, DELETE, PUSH, RANDOMPUSH, REPLACE, SHUFFLE } from "./type";

export const initialState = {
  developers: [],
  user: {
    id: 1,
    name: "Armen"
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

const solution = {
  randomPush() {
    const random = Math.ceil(Math.random() * (1000 - 100) + 100)
    return random
  },
  shuffle(...arr) {
    const shufArray = arr.toSorted(() => Math.random() - 0.5);
    return [...shufArray]
  },
  deletArray(...arr) {
    const newArr = arr.filter(elem => elem > 10)
    return [...newArr]
  },
  replace(user, name){
    user.name = name
    return user
  },
  pushAge(user, age){
    user.age = age
    return user
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RANDOMPUSH: return{...state, arr: [...state.arr, solution.randomPush()]}
    case SHUFFLE: return{...state, arr: solution.shuffle(...state.arr)}
    case DELETE: return{...state, arr: solution.deletArray(...state.arr)}
    case REPLACE: return{...state, user: solution.replace(state.user, 'Ero')}
    case PUSH: return{...state, user: solution.pushAge(state.user, 18)}
    case ADDUSER: return{...state, developers: [...state.developers, action.payload]}
      
    default: return state;
  }
}