import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages'
import SignInPage from './pages/signup';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signup' component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
