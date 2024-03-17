import Tasks from './Todos';
import Comments from './Comments';
import Users from './Users';
import Messages from './Posts';
import './Apply.css'

function App() {
  return (
    <div className="App">
      <Tasks />
      <Comments />
      <Users />
      <Messages />
    </div>
  );
}

export default App;