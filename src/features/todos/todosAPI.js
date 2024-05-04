import axios from 'axios';

const todosAPI = async () => {
  return axios('https://jsonplaceholder.typicode.com/todos?_limit=9')
    .then(res => res.data)
}

export default todosAPI