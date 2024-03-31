import Comments from './components/Comments/Comments';
import Posts from './components/Posts/Posts';
import Todos from './components/Todos/Todos';
import Users from './components/Users/Users';

export default function App() {
  return (
    <div className="App">
        <Posts />
        <Users />
        <Todos />
        <Comments/>
    </div>
  );
}