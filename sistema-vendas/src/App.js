import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClienteDao from './DAO/ClienteDao';


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cliente">
            <ClienteDao />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
