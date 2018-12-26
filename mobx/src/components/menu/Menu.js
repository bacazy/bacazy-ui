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
                url: '/table',
                title: '表格',
                key: 'table',
                icon: 'home'
            }
        ]
    }
}

export default new Menu();