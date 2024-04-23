import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 3000,
  timeoutErrorMessage: "Your internet connection is to low please try later"
})
export default instance