import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages'
import SignUpPage from './pages/signup';
import TermsPage from './pages/terms';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signup' component={SignUpPage} exact />
        <Route path='/terms' component={TermsPage} exact />
        <Route path='*' component={Home} replace />
      </Switch>
    </Router>
  );
}

export default App;
