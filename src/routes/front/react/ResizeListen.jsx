


import React from 'react';
import { Card, Input } from 'antd';
import ResizeBox from './ResizeBox';

class ResizeListen extends React.Component {

    state = {
        width: "100"
    }

    render(){

        return (
        <Card title="resize listener">
            <Input defaultValue={"100"} onChange={e=>this.setState({width: e.target.value})}/>

            <div style={{width: "100%", display: "inline-flex"}}>
                <div style={{textAlign: "center", border:"1px solid #555", width: `${this.state.width}px`}}>
                    strentch
                </div>
                <ResizeBox>
                    asidjlik
                </ResizeBox>
            </div>
        </Card>
        );
    }
}

export default ResizeListen;