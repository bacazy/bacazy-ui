

import React, { Component } from 'react';
import { Router,HashRouter } from 'react-router-dom';
import { renderRoutes } from './renderRoutes';

const routes = [
    {
        path: '/',
        component: import('./../App'),
        routes: [
            {
                path: 'home',
                exact: true,
                component: import('./../routes/home/HomePage')
            },
            {
                redirect: true,
                to: '/home'
            }
        ]
    }
]

class AppRouter extends Component {
    
    render() {
        let _r = renderRoutes("",routes);
        console.log(_r);
        return (
            <HashRouter>
                {
                    renderRoutes("",routes)
                }
            </HashRouter>
        )
    }
}

export default AppRouter;