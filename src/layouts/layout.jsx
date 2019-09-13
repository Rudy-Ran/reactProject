import React from 'react';
import { Layout } from 'antd';
import NavSide from './nav-side/navSide.jsx';
import NavTop from './nav-top/navTop.jsx';

const { Header, Footer, Sider, Content } = Layout;

class BasicLayouts extends React.Component {
    
    render() {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <NavSide/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
                        <NavTop/>
                    </Header>
                    <Content>
                        <div className="content">
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default BasicLayouts;
