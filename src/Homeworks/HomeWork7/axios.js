import axios from "axios";
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 3000
})
 
export default instance