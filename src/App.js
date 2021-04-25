import { Switch, Route } from 'react-router';
import './App.css';
import Navigation from './components/navigation';
import Comments from './pages/comments';
import Todos from './pages/todos';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Switch>
        <Route path="/todos">
          <Todos title="This is Todos" />
        </Route>

        <Route path="/comments">
          <Comments title="This is Comments" />
        </Route>

        <Route path="/">
          <h1>Hello</h1>
          <p>this project is for react assignment</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
