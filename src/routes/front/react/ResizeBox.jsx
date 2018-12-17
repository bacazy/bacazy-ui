

import React from 'react';
import ReactDOM from 'react-dom';


class ResizeBox extends React.Component {

    el = null;
    node = null

    onResize = () => {

    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }


    render () {
        
        return (
            <div ref={ el => this.el = el} className="full-width" style={{textAlign: "center", border:"1px solid #f66"}}>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default ResizeBox;