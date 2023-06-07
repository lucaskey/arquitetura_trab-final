import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClienteDao from './DAO/ClienteDao';


const App = () => {
  return (
    // <div className="App">
    //   <h1>Hello</h1>
    // </div>
    <Router>
      <Switch>
        <Route path="/clientes" component={ClienteDao} />
      </Switch>
    </Router>
  );
};

export default App;
