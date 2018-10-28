import React from 'react';
import BasePage from './BasePage';
import { BrowserRouter, Switch, Route, Redirect } from 'dva/router';
import { Layout } from 'antd';
import HomePage from './home/HomePage';
import SideBarView from './layout/sidebar/SideBarView';
import HeaderView from './layout/header/HeaderView';
import FrontPage from './front/FrontPage';


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