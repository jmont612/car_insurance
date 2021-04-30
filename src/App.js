import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/styles/App.scss";

import Home from "./views/Home";
import Process from "./views/Process";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/process" component={Process} />
      </Switch>
    </Router>
  );
}

export default App;
