import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClienteDao from './DAO/ClienteDao';
import ProdutoDao from './DAO/ProdutoDao';
import PedidoDao from './DAO/PedidoDao';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cliente">
            <ClienteDao />
          </Route>
          <Route path="/produto">
            <ProdutoDao />
          </Route>
          <Route path="/pedido">
            <PedidoDao />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
