import axios from 'axios'

const todosApi = async() => {
  return (axios({
    baseURL: 'https://jsonplaceholder.typicode.com',
    url: 'todos', 
    params: {
      _limit: 20
    }
  })
  .then(res => res.data))
}

export default todosApi