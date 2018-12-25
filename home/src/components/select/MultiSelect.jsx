

import React from  'react';
import { Select, Dropdown, Button, Input } from 'antd';


class MultiSelect extends React.Component {

    state = {
        selected: [],
    }

    render(){
        
        return (
            <div>
                <Dropdown overlay={<div style={{width: "100%", backgroundColor: "#444"}}>A</div>}>
                    <div className="tags" style={{backgroundColor:"#AAA"}}>
                        
                    </div>
                </Dropdown>                
            </div>
        )
    }
}

export default MultiSelect;