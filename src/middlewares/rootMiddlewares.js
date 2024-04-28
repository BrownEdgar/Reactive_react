import { nanoid } from 'nanoid';

const addDate = (store) => (next) => (action) => {
   if (action.type === "companies/addCompany")
      action.payload.date = new Date().toLocaleTimeString();
   next(action);
}

const addId = (store) => (next) => (action) => {
   if (action.type === "companies/addCompany")
      action.payload.id = nanoid(4);
   next(action);
}

const rootMiddlewares = (getDefaultMiddleware) => [...getDefaultMiddleware(), addDate, addId];
export default rootMiddlewares;