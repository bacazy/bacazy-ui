import React from 'react';

export function inject(_props){
    return function (WrappedComponent) {
        return class extends React.Component{
            render (){
                return <WrappedComponent {..._props}/>;
            }
        }
    }
}