import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BootCampLanding from './pages/BootCampSched';
import About from './pages/About';
import Development from './pages/Development';
import './app.css';
import JobFair from './pages/JobFair';
import Notfound from './pages/NotFound';
import Home from './pages/Home';
import ResearchWithIndustry from './pages/ResearchWithIndustry';
import SideBarTesting from './pages/SideBarTesting';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/bootcamp' component={BootCampLanding} />
          <Route exact path='/about' component={About} />
          <Route exact path='/research-with-industry' component={ResearchWithIndustry} />
          <Route exact path='/jobfair' component={JobFair} />
          <Route exact path='/development' component={Development} />
          <Route exact path='/sidebar' component={SideBarTesting} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
