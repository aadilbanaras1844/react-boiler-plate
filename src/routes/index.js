import React, {  } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import Layout from 'components/Layout/Layout';

import Page1 from 'pages/page1';
import PageError404 from 'pages/page-404';

import LeadList from 'pages/Leads/LeadList';


// const Login = lazy(() => import('pages/login'));

const Routes = () => {
  const location = useLocation();
  const dashboardRoutes = [
    '/dashboard', '/roles', '/clients', '/leads', 
    '/clients/:id', '/leads/:id', '/transactions', 
    '/requests', '/users', '/trading-accounts',
    '/settings'
  ]

  return (
    <Switch>
            <Redirect exact from="/" to="/login" />

            <Route path={dashboardRoutes}>
              <Layout>
                <Switch location={location} key={location.pathname}>
                  <div
                    initial="initial"
                    animate="in"
                    exit="out"
                  >
                    <ProtectedRoute
                      exact
                      path="/dashboard"
                      component={Page1}
                    />
                    <ProtectedRoute
                      exact
                      path="/leads"
                      component={LeadList}
                    />
                  </div>
                </Switch>
              </Layout>
            </Route>
            <Route path="/Page404" component={PageError404}></Route>
            <Redirect from="/" to="/Page404" />
          </Switch>
  );
};

export default Routes;
