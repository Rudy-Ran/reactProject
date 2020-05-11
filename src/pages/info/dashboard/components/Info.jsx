import React from 'react';
import { Col,Row } from 'antd';
import {connect} from 'react-redux';
import {changeTimestamp} from '@/utils/common.js'
function Info (props){
    const {host,network,firmware,ntp} = props;
    return(
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
                <Col span={16}>{host.get('host_name')}</Col>
            </Row>
            <Row>
                <Col span={8}>{'维保序列号'}</Col>
                <Col span={16}>{'210235A2DDH177000006'}</Col>
            </Row>
            <Row>
                <Col span={8}>{'IPv4地址'}</Col>
                <Col span={16}>{'共享网口：'}{network.getIn([0,'ipv4_address'])} ; {'专用网口：'}{network.getIn([1,'ipv4_address'])}</Col>
            </Row>
            <Row>
                <Col span={8}>{'MAC地址'}</Col>
                <Col span={16}>{'共享网口：'}{network.getIn([0,'mac_address'])} ; {'专用网口：'}{network.getIn([1,'mac_address'])}</Col>
            </Row>
        </Col>
        <Col span={12}>
            <Row>
                <Col span={8}>{'HDM固件版本'}</Col>
                <Col span={16}>{firmware.getIn([0,'bmc_revision']) }</Col>
            </Row>
            <Row>
                <Col span={8}>{'BIOS固件版本'}</Col>
                <Col span={16}>{firmware.getIn([0,'bios_revision']) }</Col>
            </Row>
            <Row>
                <Col span={8}>{'CPLD固件版本'}</Col>
                <Col span={16}>{firmware.getIn([0,'cpld_revision'])}</Col>
            </Row>
            <Row>
                <Col span={8}>{'HDM时间'}</Col>
                <Col span={16}>{changeTimestamp(ntp.get('timestamp'))}</Col>
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
    )
}
const mapStateToProps = state =>{
    return{
        host:state.getIn(['dashboard','host']),
        network:state.getIn(['dashboard','networkData']),
        firmware:state.getIn(['dashboard','firmware']),
        ntp:state.getIn(['dashboard','ntp'])
    };
};
export default connect(mapStateToProps,null)(React.memo(Info));
