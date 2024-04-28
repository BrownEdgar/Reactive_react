import { nanoid } from "nanoid";


const checkUsers = (store) => (next) => (action) =>{
  if (action.type === 'users/addUser') {
		const user = store.getState().users;
		const res = user.some(elem => elem.username === action.payload.username)
		if (res) {
			action.payload.data = new Date().toLocaleTimeString()
		}
  }
	next(action)
}

const addUserId = (store) => (next) => (action) =>{
  if (action.type === 'users/addUser') {
		action.payload.id = nanoid(7)
  }
	next(action)
}

const middlewaries = (mid) => [...mid(), checkUsers, addUserId]

export default middlewaries