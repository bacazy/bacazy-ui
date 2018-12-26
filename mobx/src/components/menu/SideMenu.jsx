
import React from 'react';
import { Menu, Icon } from 'antd';
import { inject } from '../utils/inject';
import menu from './Menu';
import {observer } from 'mobx-react';

const SubMenu = Menu.SubMenu;

@inject({menu: menu})
@observer
class SideMenu extends React.Component {

    componentDidMount = () => {
      this.props.menu.updateMenu();
    }

    render() {
        const {menu} = this.props.menu;
        return (
            <Menu
                theme="light"
                style={{ width: 200, height:"100vh" }}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                {
                    menu.map( m => {
                        if(m.children){
                            return (
                                <SubMenu key={menu.key} title={<span><Icon type={menu.icon}></Icon>{menu.title}</span>}>
                                    {
                                        m.children.map(e => {
                                            return (
                                                <Menu.Item key={e.key}>{e.title}</Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        }else{
                            return (
                                <Menu.Item key={m.key}><Icon type={m.icon}></Icon>{m.title}</Menu.Item>
                            )
                        }
                    })
                }
            </Menu>
        )
    }
}

export default SideMenu;