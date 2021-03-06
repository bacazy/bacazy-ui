import React from 'react';
import BasePage from './BasePage';
import { Switch, Route, Redirect } from 'dva/router';
import { Layout } from 'antd';
import SideBarView from './layout/sidebar/SideBarView';
import HeaderView from './layout/header/HeaderView';
import FrontPage from './front/FrontPage';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const HomePage = Loadable({
    loader: () => import('./home/HomePage'),
    loading: Loading
})

class AppLayout extends BasePage {
    constructor() {
        super();
    }

    render() {
        return (
            <Layout style={{ height: "100%" }}>
                <Layout.Header>
                    <HeaderView />
                </Layout.Header>
                <Layout.Content style={{ height: "100%" }}>
                    <Layout style={{ height: "100%" }}>
                        <Layout.Sider style={{ height: "100%" }}>
                            <SideBarView/>
                        </Layout.Sider>
                        <Layout.Content style={{ height: "100%" }} className="padding-sm">
                            <main>
                                <Switch>
                                    <Route path="/home" exact component={HomePage} />
                                    <Route path="/front" component={FrontPage} />
                                    <Redirect to="/home" />
                                </Switch>
                            </main>
                        </Layout.Content>
                    </Layout>
                </Layout.Content>
            </Layout>
        )
    }
}

export default AppLayout;