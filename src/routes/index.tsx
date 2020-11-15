import * as React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import * as Page from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
        <NavLink exact to="/products">
          List
        </NavLink>
        </li> 
        <li>
          <Link to="/cart">cart</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products" component={Page.ProductList} />
        <Route exact path="/cart" component={Page.Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
