import React from 'react'

import LoadingPage from "../components/LoadingPage";
import Loadable from 'react-loadable';

export function loadableRoute(component) {
    return Loadable({
        loader: () => component,
        loading: LoadingPage
    })
}