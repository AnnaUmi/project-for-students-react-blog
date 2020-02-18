import { Switch, Route } from "react-router-dom";
import React from "react";
import GlobalFeed from "./pages/globalFeed";
import Article from "./pages/article";
import Authentication from "./pages/authentication";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact></Route>
      <Route exact path="/login" component={Authentication}></Route>
      <Route exact path="/register" component={Authentication}></Route>
      <Route path="/articles/:slug" component={Article}></Route>
    </Switch>
  );
};
export default Routes;
