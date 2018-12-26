
import React from 'react';
import { Spin } from 'antd';


class HomePage extends React.Component {

    render(){
        console.log("home", this.props)
        return (
            <div style={{width: '100%', height: '100%'}}>
                Home Page
            </div>
        )
    }
}


export default HomePage;