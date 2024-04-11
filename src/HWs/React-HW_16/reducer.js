import { actionType } from "./actionType.js";

export const initialState = {
  developers: [],
  user: {
    id: 1,
    name: "Armen",
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};

const actionsWithInitialState = {
  addRandomNumber() {
    const rndNumber = Math.trunc(Math.random() * (999 - 100) + 100);
    return rndNumber;
  },

  shuffleArray(...arr) {
    const shuffledArr = arr.toSorted(() => Math.random() - 0.5);
    return [...shuffledArr];
  },

  deleteInArray(...arr) {
    const newArr = arr.filter((n) => n > 10);
    return [...newArr];
  },

  rename(user, name) {
    user.name = name;
    return user;
  },

  addUserAge(user, age) {
    user.age = age;
    return user;
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD:
        return { ...state, arr: [...state.arr, actionsWithInitialState.addRandomNumber()] };

    case actionType.ADDUSER:
      return { ...state, developers: [...state.developers, action.payload] };

    case actionType.SHUFFLE:
        return { ...state, arr: actionsWithInitialState.shuffleArray(...state.arr) };

    case actionType.DELETE:
        return { ...state, arr: actionsWithInitialState.deleteInArray(...state.arr) };

    case actionType.RENAME:
        return { ...state, user: actionsWithInitialState.rename(state.user, "Ponch") };

    case actionType.ADDAGE:
        return { ...state, user: actionsWithInitialState.addUserAge(state.user, 45) };

    default:
      return state;
  }
};

export default reducer;
