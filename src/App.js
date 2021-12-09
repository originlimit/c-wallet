import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages'
import SignUpPage from './pages/signup';
import TermsPage from './pages/terms';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signup' component={SignUpPage} exact />
        <Route path='/terms' component={TermsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
