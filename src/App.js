import React from 'react';
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/tracks/:id" component={Lyrics} />
            </Switch>
          </div>

        </React.Fragment>
      </Router>
    </Provider>

  );
}

export default App;
