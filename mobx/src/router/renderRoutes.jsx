
import React, { Component } from 'react';
import { loadableRoute } from './loadableRoute';
import { pathResolve } from '../utils/common';
import { Switch, Redirect, Route } from 'react-router-dom';

class Counter {
    _index = 1;
    get count(){
        this._index = this._index + 1;
        return this._index;
    }
}

let counter = new Counter();

function renderRoute(path, route, parent, options) {
    let _p = pathResolve(path, route.path || "");
    if(route.redirect){
        return <Redirect key={`key_${counter.count}`} to={route.to}/>
    }

    if(route.routes){
        if(route.component){
            let RouteContainer = loadableRoute(route.component);
            return (<RouteContainer key={`key_${counter.count}`}>
                {
                    renderRoutes(_p, route.routes, "container", options)
                }
            </RouteContainer>);
        }else{
            return renderRoutes(_p, route.routes, parent, options);
        }
    }

    return <Route key={`key_${counter.count}`} path={_p} component={loadableRoute(route.component)} exact={route.exact}/>;
}

export function renderRoutes( path = "", routes , parent="root",  options={}) {
    if(routes && routes.length > 0){
            let children = routes.map(route => {
                return renderRoute(path, route, "switch", options);
            });
            if(parent === 'switch'){
                return children;
            }else{
                return (
                    <Switch>
                        {
                            children
                        }
                    </Switch>
                )  
            }
        }

    return null;
}