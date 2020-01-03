import React from 'react';
import { Layout } from 'antd';
import NavSide from './nav-side/navSide.jsx';
import NavTop from './nav-top/navTop.jsx';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
const { Header, Sider, Content } = Layout;
class BasicLayouts extends React.Component {
    render() {
        const {isLogin} = this.props;
        if(isLogin){
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
        }else {
            return <Redirect to="/login"/>;
        }
  
    }
}
const mapStateToProps = state =>{
    return{
        isLogin:state.getIn(['common','isLogin']),
    };
};
export default connect(mapStateToProps,null)(BasicLayouts);
