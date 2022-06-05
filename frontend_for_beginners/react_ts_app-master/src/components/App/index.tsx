import React from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from '../Home/index';
import User from '../User/index';
import mainDivStyle from './style';

const App = () => {

  return (
    <BrowserRouter>
      <nav style={mainDivStyle}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/user/:id">User</Link>
        </div>
      </nav>
      <Switch>

      <Route path="/" exact component={Home} />

      <Route path="/user/" component={User} />;

      </Switch>
   </BrowserRouter>
  );
};

export default App;