import { observable, action } from "mobx";


class Menu {

    @observable 
    menu = [];

    @observable 
    selectKey = "";    
    
    @action 
    updateMenu(){
        this.menu = [
            {
                url: '/home',
                title: '首页',
                key: 'home',
                icon: 'home'
            },
            {
                url: '/map',
                title: '地图',
                key: 'table',
                icon: 'tags'
            }
        ]
    }
}

export default new Menu();