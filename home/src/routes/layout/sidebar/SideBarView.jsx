import React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';

const SubMenu = Menu.SubMenu;

class SideBarView extends React.Component {
    renderMenuItem = (item) => {
        if (item.children && item.children.length > 0) {
            return (
                <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                    {
                        item.children.map(e => {
                            return this.renderMenuItem(e);
                        })
                    }
                </SubMenu>
            )
        } else {
            return (
                <Menu.Item key={item.key}>
                    <Link to={item.url}>
                        <Icon type={item.icon} />
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
            )
        }
    }

    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
            >
                {
                    this.props.menu.map(item => {
                        return this.renderMenuItem(item);
                    })
                }
            </Menu>
        )
    }
}

const mapStateToProps = ({ menu }) => { return menu; };

export default connect(mapStateToProps)(SideBarView);