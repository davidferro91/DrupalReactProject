import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BootCampLanding from './pages/BootCampSched';
import About from './pages/About';
import Development from './pages/Development';
import './app.css';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/bootcamp' component={BootCampLanding} />
          <Route exact path='/about' component={About} />
          <Route exact path='/development' component={Development} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
