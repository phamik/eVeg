import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './components/Root';
import App from './App';
import Main from './components/HomePageComponents/Main';
import CheckoutContainer from './components/CheckoutContainer';
import Invoice from './components/Invoice';

export default (
  <Route path="/" component={Root}>
    <IndexRoute               component={Main} />
    <Route path="/shop-all"   component={App} />
    <Route path="/your-order" component={CheckoutContainer} />
    <Route path="/invoice"    component={Invoice} />
  </Route>
)
