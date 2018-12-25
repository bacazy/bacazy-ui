import React from 'react';
import BasePage from '../BasePage';
import { Switch, Route } from 'dva/router';
import MultiSelectPage from '../select/MultiSelectPage';


class HomePage extends BasePage {

    render(){
        return (
            <div className="home-view">
                <div>
                    Home Page
                </div>
                <main>
                    <Switch>
                        <Route path="/select" component={MultiSelectPage}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default HomePage;