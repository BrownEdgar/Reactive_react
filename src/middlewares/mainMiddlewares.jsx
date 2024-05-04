import { nanoid } from 'nanoid';

const myFirstMiddleware = (store) => (next) => (action) => {
  console.log(new Date().toLocaleTimeString(), action.type);
  next(action)
}

const checkUser = (store) => (next) => (action) => {
  if (action.type === 'users/addUser') {
    const users = store.getState().users
    const result = users.some(user => user.username === action.payload.username)
    if (result) {
      console.log('user alredy exist');
      return
    }
  }
  next(action)
}

const addId = (store) => (next) => (action) => {
  if (action.type === 'users/addUser') {
    action.payload.id = nanoid(5)
  }
  next(action)
}


const mainMiddlewaries = (defaultMiddleware) => [...defaultMiddleware(), myFirstMiddleware, checkUser, addId]
export default mainMiddlewaries