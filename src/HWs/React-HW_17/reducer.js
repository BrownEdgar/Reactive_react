import axios from "axios";

export const initialState = {
  arr: [98, 32, 90, 5, 43, 12, 12, 98, 484],
  todos: [],
  products: [
    {
      id: 1,
      name: "Iphone",
      image: "/images/iphone.jpg",
      price: 1230,
    },
  ],
  total: 18,
};

const getTodos = async () => {
  let data;
  axios(
    `https://jsonplaceholder.typicode.com/todos?_limit=${initialState.total}`
  ).then((res) => (console.log(res.data)));
  return data;
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getTodos":
      return { ...state, todos: getTodos()};
    default:
      return state;
  }
};