import React from 'react';
import { Menu, Icon } from 'antd';
import {Link,withRouter} from 'react-router-dom';
const SubMenu = Menu.SubMenu;
class NavSide extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let subMenuSelected = this.props.history.location.pathname.split("/")[1];
        return (
            <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.location.pathname]} defaultOpenKeys={[subMenuSelected]}>
                    <SubMenu key="info" title={<span><Icon type="dashboard"/>信息</span>} >
                        <Menu.Item key="/info/dashboard"><Link to="/info/dashboard">整体概况</Link></Menu.Item>
                        <Menu.Item key="/info/hardware"><Link to="/info/hardware">硬件信息</Link></Menu.Item>
                        <Menu.Item key="/info/firmware"><Link to="/info/firmware">固件信息</Link></Menu.Item>
                        <Menu.Item key="/info/monitoring"><Link to="/info/monitoring">实时监控</Link></Menu.Item>
                        <Menu.Item key="/info/resource_summary"><Link to="/info/resource_summary">系统资源监控</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="health" title={<span><Icon type="heart" />健康诊断</span>} >
                        <Menu.Item key="/info/event_log"><Link to="/server_health/event_log">事件日志</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="network" title={<span><Icon type="global" />网络</span>}>
                        <Menu.Item key="/network/dedicated_port"><Link to="/network/dedicated_port">专用网口</Link></Menu.Item>
                        <Menu.Item key="/network/shared_port"><Link to="/network/shared_port">共享网口</Link></Menu.Item>
                        <Menu.Item key="/network/dns"><Link to="/network/dns">DNS</Link></Menu.Item>
                        <Menu.Item key="/network/port_mode"><Link to="/network/port_mode">网口模式</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="study" title={<span><Icon type="smile" />其他</span>}>
                        <Menu.Item key="/other/roughviz"><Link to="/other/roughviz">roughviz</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
export default withRouter(NavSide);
  