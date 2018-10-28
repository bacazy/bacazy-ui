import React from 'react';
import { routerRedux, Route, Switch, Redirect } from 'dva/router';
import AppLayout from './routes/AppLayout';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" component={AppLayout} />
    </ConnectedRouter>
  );
}

export default RouterConfig;
