import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/projects' component={ProjectPage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
