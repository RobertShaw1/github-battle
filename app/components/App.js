/** NODE MODULES */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** LOCAL MODULES */
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
import Results from './Results';


//Create App component
export default function App() {
  return (
    <Router>
      <div className='container'>
          <Nav /> 
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/battle' component={Battle} />
              <Route path='/battle/results' component={Results} />
              <Route path='/popular' component={Popular} />
              <Route render={function() {
                  return <p>Not Found</p>
              }}/>
          </Switch>
      </div>
    </Router>
  )
}
