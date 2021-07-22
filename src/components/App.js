import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import BadgeDetails from '../pages/BadgeDetailsContainer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          {/* <Route component={NotFound}/> */}
{/*           <Route exact path="/404" component={NotFound} />
          <Redirect from="*" to="/404" /> */}
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
