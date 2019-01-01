
import React from 'react';
import { Layout } from 'antd';
import SideMenu from './components/menu/SideMenu';

const { Sider, Header, Footer, Content } = Layout;

class App extends React.Component {
    render() {
        return (
            <Layout className="full-height">
                <Header>
                    
                </Header>
                <Content className="full-height">
                    <Layout className="full-height">
                            {
                                this.props.children
                            }
                        <Footer>
                        
                        </Footer>   
                    </Layout>
                </Content>                
            </Layout>

        )
    }
}

export default App;