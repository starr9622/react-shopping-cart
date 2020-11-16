import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';
import * as Page from '../pages';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/products">전체 상품</Link>
        </li>
        <li>
          <Link to="/cart">장바구니</Link>
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
