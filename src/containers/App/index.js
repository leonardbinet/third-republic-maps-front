import React from "react";

import { Switch, Route } from "react-router-dom";

import { DynamicNavBar } from "../../components/Nav";
import { Home } from "../../modules/Home";
import { HierarchyLevel } from "../../modules/HierarchyLevel";
import { PageNotFound } from "../../modules/NotFound";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="p-3">
      <DynamicNavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/hierarchy/:level" component={HierarchyLevel} exact />
        <Route path="*" exact={true} component={PageNotFound} />
      </Switch>
    </Container>
  );
}

export default App;
