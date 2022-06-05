import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

import {Edit,Add,List} from "../Category/index";
import {Login} from "../User/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


function App() {
  return (
    <div >
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to={"/user"}>
          Full Stack Devs
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link  to={"/category"} className="nav-link">
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link  to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/user"]} component={Login} />
          <Route exact path={"/category"} component={List} />
          <Route exact path="/add" component={Add} />
          <Route path="/category/:id" component={Edit} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
