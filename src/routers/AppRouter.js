import React, { lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

const ExpenseDashboardPage = lazy(() => import('../components/ExpenseDashboardPage'));
const AddExpensePage = lazy(() => import('../components/AddExpensePage'));
const EditExpensePage = lazy(() => import('../components/EditExpensePage'));
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>    
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;