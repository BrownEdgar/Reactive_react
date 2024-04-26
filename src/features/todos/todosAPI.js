import axios from 'axios';

const todosApi = async () => {
  return axios('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then(res => res.data)
}

export default todosApi