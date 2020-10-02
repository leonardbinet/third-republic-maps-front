import React from "react";

import { Switch, Route } from "react-router-dom";

import { Nav } from "../../components/Nav";
import { Home } from "../../modules/Home";
import { HierarchyLevel } from "../../modules/HierarchyLevel";
import { PageNotFound } from "../../modules/NotFound";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/hierarchy/:level" component={HierarchyLevel} exact />
        <Route path="*" exact={true} component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
