import React from 'react';
import { Col,Row } from 'antd';
import {connect} from 'react-redux';
class Info extends React.Component {

    render() {
        const {hostName,network,hdmInfo,biosInfo,cpldInfo,hdmTime} = this.props;
        //TODO: 为什么 network[0].ipv4_address 会报错 提示 ipv4_address 属性不存在
        /** 在获取netwok的值之前 其他的reducer执行时并没有获取到 network的值 此时是undefined 并没有 ipv4_address 属性 */
        return (
            <div className="info">
                <Col span={12}>
                    <Row>
                        <Col span={8}>{'产品厂商'}</Col>
                        <Col span={16}>{'Unis Huashan Technologies Co., Ltd.'}</Col>
                    </Row>
                    <Row>
                        <Col span={8}>{'产品名称'}</Col>
                        <Col span={16}>{'UniSerrver R2700 G3'}</Col>
                    </Row>
                    <Row>
                        <Col span={8}>{'主机名'}</Col>
                        <Col span={16}>{hostName}</Col>
                    </Row>
                    <Row>
                        <Col span={8}>{'维保序列号'}</Col>
                        <Col span={16}>{'210235A2DDH177000006'}</Col>
                    </Row>
                    <Row>
                        <Col span={8}>{'IPv4地址'}</Col>
                        <Col span={16}>{'共享网口：'}{network[0] ? network[0].ipv4_address : ''} ; {'专用网口：'}{ network[1] ? network[1].ipv4_address : ''}</Col>
                    </Row>
                    <Row>
                        <Col span={8}>{'MAC地址'}</Col>
                        <Col span={16}>{'共享网口：'}{network[0] ? network[0].mac_address : ''} ; {'专用网口：'}{ network[1] ? network[1].mac_address : ''}</Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={8}>{'HDM固件版本'}</Col>
                        <Col span={16}>{hdmInfo}</Col>
                    </Row>
                    <Row>
                        <Col span={8}>{'BIOS固件版本'}</Col>
                        <Col span={16}>{biosInfo}</Col>
                    </Row>
                    <Row>
                        <Col span={8}>{'CPLD固件版本'}</Col>
                        <Col span={16}>{cpldInfo}</Col>
                    </Row>
                    <Row>
                        <Col span={8}>{'HDM时间'}</Col>
                        <Col span={16}>{hdmTime}</Col>
                    </Row>
                    <Row>
                        <Col span={8}>{'远程控制台'}</Col>
                        <Col span={16} className="kvm">
                            <button>KVM</button>
                            <button>H5 KVM</button>
                        </Col>
                    </Row>
                </Col>
            </div>
            
        );
    }
}
const mapStateToProps = state =>{
    return{
        hostName:state.getIn(['dashboard','hostName']),
        network:state.getIn(['dashboard','networkData']),
        hdmInfo:state.getIn(['dashboard','hdm_info']),
        biosInfo:state.getIn(['dashboard','bios_info']),
        cpldInfo:state.getIn(['dashboard','cpld_info']),
        hdmTime:state.getIn(['dashboard','hdmTime'])
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        
    };
}; 
export default connect(mapStateToProps,mapDispatchToProps)(Info);
