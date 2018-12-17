import React from 'react';
import { routerRedux, Route, Switch, Redirect } from 'dva/router';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

const { ConnectedRouter } = routerRedux;
const App = Loadable({
    loader: () => import('./routes/AppLayout'),
    loading: Loading
})

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  );
}

export default RouterConfig;
