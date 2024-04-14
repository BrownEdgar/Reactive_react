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
  const res = await axios(
    `https://jsonplaceholder.typicode.com/todos?_limit=${initialState.total}`
  );
  return res.data;
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getTodos":
      return { ...state, todos: getTodos()};
    default:
      return state;
  }
};