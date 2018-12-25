

import React from  'react';
import { Select } from 'antd';
import { Switch, Route } from 'dva/router';
import ReactPage from './ReactPage';
import AngularPage from './AngularPage';


class FrontPage extends React.Component {
    render(){
        return (
            <div>
                <h2>React</h2>
                <div>
                    <Switch>
                        <Route path="/front/react" component={ReactPage}/>
                        <Route path="/front/angular" component={AngularPage}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default FrontPage;