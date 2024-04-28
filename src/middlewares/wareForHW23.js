import { nanoid } from 'nanoid'

const checkUser = (store) => (next) => (action) => {
  if (action.type === "rdobject/addUser") {
    const users = store.getState().userbase;
    const result = users.some(user => user.username === action.payload.username)
    if (result) {
      console.log("user allredy exist");
      return
    }
  }
  next(action)
} 

 const addId = (store) => (next) => (action) => {
   if (action.type === "rdobject/addUser") {
      action.payload.id = nanoid(5)
    }
   next(action)
 }

const addDate = (store) => (next) => (action) => {
  if (action.type === "rdobject/addUser") {
    action.payload.date = new Date().toLocaleTimeString()
  }
  next(action)
}



const middlewareForHW23 = (defaultMiddleware) => [...defaultMiddleware(), checkUser, addId, addDate]

export default middlewareForHW23