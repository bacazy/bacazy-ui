
import React from 'react';
import { Menu, Icon } from 'antd';
import { inject } from '../utils/inject';
import menu from './Menu';
import {observer } from 'mobx-react';
import styles  from './SideMenu.less';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

@inject({menu: menu})
@observer
class SideMenu extends React.Component {

    componentDidMount = () => {
      this.props.menu.updateMenu();
      console.log(this.props);
    }

    render() {
        const {menu} = this.props.menu;
        return (
            <div className={styles.Container}>
                <Menu
                    theme="light"
                    style={{ width: "100%"}}
                    mode="inline"
                    className={styles.Menu}
                >
                    {
                        menu.map( m => {
                            if(m.children){
                                return (
                                    <SubMenu key={menu.key} title={<span><Icon type={menu.icon}></Icon>{menu.title}</span>}>
                                        {
                                            m.children.map(e => {
                                                return (
                                                    <Menu.Item key={e.key}><Link key={e.key} to={e.url}>{e.title}</Link></Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            }else{
                                return (
                                    <Menu.Item key={m.key}><Link key={m.key} to={m.url}><Icon type={m.icon}></Icon>{m.title}</Link></Menu.Item>
                                )
                            }
                        })
                    }
                </Menu>
            </div>
        )
    }
}

export default SideMenu;