import { Switch, Route } from "react-router-dom";
import React from "react";
import GlobalFeed from "./pages/globalFeed";
import Article from "./pages/article";
import Authentication from "./pages/authentication";
import TagFeed from "./pages/tagFeed";
import YourFeed from "./pages/yourFeed";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact></Route>

      <Route path="/feed" component={YourFeed}></Route>
      <Route path="/tags/:slug" component={TagFeed}></Route>
      <Route exact path="/login" component={Authentication}></Route>
      <Route exact path="/register" component={Authentication}></Route>
      <Route path="/articles/:slug" component={Article}></Route>
    </Switch>
  );
};
export default Routes;
