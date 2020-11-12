import * as React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import * as Page from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
        <NavLink exact to="/list">
          List
        </NavLink>
        </li> 
        <li>
          <Link to="/cart">cart</Link>
        </li>
        <li>
          <Link to="/noMatch">nomatch</Link>
        </li>
      </ul>
      <Switch>
        <Route exact from="/" to="/list" />
        <Route exact path="/list" component={Page.ProductList} />
        <Route exact path="/cart" component={Page.Cart} />
        <Route path="*">
          <Page.PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
