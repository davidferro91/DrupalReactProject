import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BootCampLanding from './pages/BootCampSched';


function App () {
    return (
        <Router>
            <div>
                <div>
                    <Route exact path='/bootcamp' component={BootCampLanding} />
                </div>
            </div>
        </Router>   
    )
} 

export default App;
