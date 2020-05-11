import React from 'react';
import { Row,Col,Alert } from 'antd';
import Title from "@/common/components/subSection/subSectionTitle.jsx";
const Basic = (props) =>{
        const data = props.data;
        return(
            <div>
                <Alert message="HDM共享网络接口与专用网络接口的IPv4地址处于同一网段，可能导致网络不通" type="error" showIcon 
                    className={data.same_network === 219 ? '' : 'hide'}/>
                <Title title={'概况'}/>
                <Row>
                    <Col span={8}>LAN接口</Col>
                    <Col span={12}>{props.type === 'eth1' ? '专用网口' : '共享网口'}</Col>
                </Row>
                <Row>
                    <Col span={8}>MAC地址</Col>
                    <Col span={12}>{data.mac_address}</Col>
                </Row>

                <Title title={'IPv4概况'}/>
                <Row>
                    <Col span={8}>IPv4地址</Col>
                    <Col span={12}>{data.ipv4_address}</Col>
                </Row>
                <Row>
                    <Col span={8}>子网掩码</Col>
                    <Col span={12}>{data.ipv4_subnet}</Col>
                </Row>
                <Row>
                    <Col span={8}>默认网关</Col>
                    <Col span={12}>{data.ipv4_gateway}</Col>
                </Row>

                <Title title={'IPv6概况'}/>

                <Row>
                    <Col span={8}>IPv6地址1</Col>
                    <Col span={12}>{data.ipv6_address}</Col>
                </Row>
                <Row>
                    <Col span={8}>IPv6地址2</Col>
                    <Col span={12}>{data.ipv6_StatelessAddress}</Col>
                </Row>
                <Row>
                    <Col span={8}>本地链路地址</Col>
                    <Col span={12}>{data.ipv6_localLinkAddress}</Col>
                </Row>
                <Row>
                    <Col span={8}>默认网关</Col>
                    <Col span={12}>{data.ipv6_gateway}</Col>
                </Row>

                <Title title={'VLAN概况'}/>
                <Row>
                    <Col span={8}>VLAN ID</Col>
                    <Col span={12}>{data.vlan_id}</Col>
                </Row>
                <Row>
                    <Col span={8}>VLAN优先级</Col>
                    <Col span={12}>{data.vlan_priority}</Col>
                </Row>
            </div>
        );
}
export default React.memo(Basic);