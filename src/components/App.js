import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/home" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
