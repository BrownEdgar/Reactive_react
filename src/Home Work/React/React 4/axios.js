import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
  timeout: 3000,
  timeoutErrorMessage: 'Erorr'
})
export default instance