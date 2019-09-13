
import React from 'react';
import { Row,Col,Input,Checkbox,Button,Alert} from 'antd';
import {connect} from 'react-redux';
import Title from "@/common/components/subSection/subSectionTitle.jsx";
import * as actionCreators from '../store/actionCreators.js';
import {clearErrorStatus,changeErrorStatus} from '@/common/store/actionCreators.js';
import {IP,checkIPV6,isSubnet} from '@/utils/common.js';
import {dialog} from '@/utils/h3c.dialog.js';
class Config extends React.Component{
    render(){
        const {handleValueChange,data,error,ipv4InputDisable,ipv6InputDisable,vlanInputDisable} = this.props;
        return(
            <div>
                <Alert message="HDM共享网络接口与专用网络接口的IPv4地址处于同一网段，可能导致网络不通" type="error" showIcon 
                    className={data.same_network === 219 ? '' : 'hide'}/>
                <Title title={'IPv4配置'}/>
                <Row>
                    <Col span={8}>IPv4配置</Col>
                    <Col span={12}>
                        <Checkbox name="ipv4_enable" checked={data.ipv4_enable ? true : false} onChange = {(e)=>handleValueChange(e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>自动获取IP地址</Col>
                    <Col span={12}><Checkbox name="ipv4_dhcp_enable" checked = {data.ipv4_dhcp_enable ? true : false} disabled = {data.ipv4_enable ? false : true}
                        onChange = {(e)=>handleValueChange(e)}/></Col>
                </Row> 
                <Row>
                    <Col span={8}>IPv4地址</Col>
                    <Col span={4}>
                        <Input name="ipv4_address" value = {data.ipv4_address} onChange = {(e)=>handleValueChange(e)}
                            className = {error.ipv4AddressError ? 'error-input' : ''}
                            disabled = {ipv4InputDisable}/>
                    </Col> 
                    <Col span={2} className = {error.ipv4AddressError ? 'error' : 'hide'}>
                        无效的IPv4地址
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>子网掩码</Col>
                    <Col span={4}>
                        <Input name="ipv4_subnet" value = {data.ipv4_subnet} onChange = {(e)=>handleValueChange(e)}
                            className = {error.ipv4SubnetError ? 'error-input' : ''}
                            disabled = {ipv4InputDisable}/>
                    </Col>
                    <Col span={2} className = {error.ipv4SubnetError ? 'error' : 'hide'}>
                        无效的子网掩码
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>默认网关</Col>
                    <Col span={4}>
                        <Input name="ipv4_gateway" value = {data.ipv4_gateway} onChange = {(e)=>handleValueChange(e)}
                            className = {error.ipv4GatewayError ? 'error-input' : ''}
                            disabled = {ipv4InputDisable}/>
                    </Col>
                    <Col span={2} className = {error.ipv4GatewayError ? 'error' : 'hide'}>
                        无效的默认网关
                    </Col>
                </Row>
                <Title title={'IPv6配置'}/>
                <Row>
                    <Col span={8}>IPv6配置</Col>
                    <Col span={12}>
                        <Checkbox name="ipv6_enable" checked = {data.ipv6_enable ? true : false} onChange = {(e)=>handleValueChange(e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>自动获取IP地址</Col>
                    <Col span={12}><Checkbox name="ipv6_dhcp_enable" checked = {data.ipv6_dhcp_enable ? true : false}  disabled = {data.ipv6_enable ? false : true}
                        onChange = {(e)=>handleValueChange(e)}/></Col>
                </Row> 
                <Row>
                    <Col span={8}>IPv6地址</Col>
                    <Col span={6}>
                        <Input name="ipv6_address" value = {data.ipv6_address} onChange = {(e)=>handleValueChange(e)}
                            className = {error.ipv6AddressError ? 'error-input' : ''}
                            disabled = {ipv6InputDisable}/>
                    </Col>
                    <Col span={2} className = {error.ipv6AddressError ? 'error' : 'hide'}>
                        无效的IPv6地址
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>默认网关</Col>
                    <Col span={6}>
                        <Input name="ipv6_gateway" value = {data.ipv6_gateway} onChange = {(e)=>handleValueChange(e)}
                            className={error.ipv6GatewayError ? 'error-input':''}
                            disabled = {ipv6InputDisable}/>
                    </Col>
                    <Col span={2} className = {error.ipv6GatewayError ? 'error' : 'hide'}>
                        无效的IPv6网关
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>子网前缀长度</Col>
                    <Col span={4}>
                        <Input name="ipv6_prefix" value = {data.ipv6_prefix} onChange = {(e)=>handleValueChange(e)}
                            className={error.ipv6PrefixError ? 'error-input': ''}
                            disabled = {ipv6InputDisable}/>
                    </Col>
                    <Col span={3} className = {error.ipv6PrefixError ? 'error' : 'hide'}>
                        无效的IPv6前缀长度
                    </Col>
                </Row>
                <Title title={'VLAN设置'}/>
                <Row>
                    <Col span={8}>VLAN设置</Col>
                    <Col span={12}>
                        <Checkbox name="vlan_enable" checked = {data.vlan_enable ? true : false} onChange = {(e)=>handleValueChange(e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>VLAN ID</Col>
                    <Col span={4}>
                        <Input name="vlan_id" value={data.vlan_id} onChange = {(e)=>handleValueChange(e)}
                            className = {error.vlanIDError ? 'error-input': ''}
                            disabled = {vlanInputDisable}/>
                    </Col>
                    <Col span={2} className = {error.vlanIDError ? 'error' : 'hide'}>
                        无效的VLAN ID
                    </Col>
                </Row> 
                <Row>
                    <Col span={8}>VLAN优先级</Col>
                    <Col span={4}>
                        <Input name="vlan_priority" value = {data.vlan_priority} onChange = {(e)=>handleValueChange(e)}
                            className = {error.vlanPriorityError ? 'error-input': ''}
                            disabled = {vlanInputDisable}/>
                    </Col>
                    <Col span={2} className = {error.vlanPriorityError ? 'error' : 'hide'}>
                        无效的VLAN优先级
                    </Col>
                </Row>
                <Row>
                    <Col span={8}></Col>
                    <Col span={4}>
                        <Button type="primary" onClick={()=>this.saveNetworkData()}>
                            保存
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
    saveNetworkData(){
        var obj = this;
        const {data,handleSaveNetworkData} = this.props;
        if(obj.validNetworkData(data)){
            dialog.confirm('浏览器会话将失去连接。确认是否要修改专用网口配置?',function(){
                handleSaveNetworkData(data);
            });
        }
    }
    validNetworkData(data){
        console.log(data);
        const {handleChangeErrorStatus,clearErrorStatus} = this.props;
        clearErrorStatus();
        // ipv4_address
        if (data.ipv4_enable === 1 && data.ipv4_dhcp_enable === 0 && !IP.checkAll(data.ipv4_address)){
            handleChangeErrorStatus('ipv4AddressError',true);
            return false;
        }
        // ipv4_subnet
        if (data.ipv4_enable === 1 && data.ipv4_dhcp_enable === 0 && !isSubnet(data.ipv4_subnet)) {
            handleChangeErrorStatus('ipv4SubnetError',true);
            return false;
        }
        // ipv4_gateway
        if (data.ipv4_enable === 1 && data.ipv4_dhcp_enable === 0 && data.ipv4_gateway!=='0.0.0.0' && !IP.checkAll(data.ipv4_gateway)) {
            handleChangeErrorStatus('ipv4GatewayError',true);
            return false;
        }
        // ipv6_address
        if (data.ipv6_enable === 1 && data.ipv6_dhcp_enable === 0 && (!checkIPV6(data.ipv6_address,false,false))){
            handleChangeErrorStatus('ipv6AddressError',true);
            return false;
        }
        //ipv6 gateway
        if (data.ipv6_enable === 1 && data.ipv6_dhcp_enable === 0 && (!checkIPV6(data.ipv6_gateway,false,false))){
            handleChangeErrorStatus('ipv6GatewayError',true);
            return false;
        }
        // ipv6_prefix
        if (data.ipv6_enable === 1 && data.ipv6_dhcp_enable === 0 && (!(/^\d+$/.test(data.ipv6_prefix) && data.ipv6_prefix > 0 && data.ipv6_prefix < 128))) {
            handleChangeErrorStatus('ipv6PrefixError',true);
            return false;
        }
        // vlan_id
        if (data.vlan_enable === 1 && (!(/^\d+$/.test(data.vlan_id) && (data.vlan_id >= 2 && data.vlan_id <= 4094)))) {
            handleChangeErrorStatus('vlanIDError',true);
            return false;
        }
        // vlan_priority
        if (data.vlan_enable === 1 && (!(/^\d+$/.test(data.vlan_priority) && data.vlan_priority >= 0 && data.vlan_priority <= 7))) {
            handleChangeErrorStatus('vlanPriorityError',true);
            return false;
        }
        return true;
    }
    handleValueChange(){

    }
}
const mapStateToProps = state =>{
    return{
        dedicatePortData:state.getIn(['network','dedicatePort']),
        sharePortData:state.getIn(['network','sharedPort']),
        error:state.getIn(['common','error','network']).toJS(),
        ipv4InputDisable:state.getIn(['network','ipv4InputDisable']),
        ipv6InputDisable:state.getIn(['network','ipv6InputDisable']),
        vlanInputDisable:state.getIn(['network','vlanInputDisable']),
    };
};
const mapDispatchToProps = (dispatch,ownProps) =>{
    return{
        handleValueChange(e){
            let key = e.target.name;
            let value = e.target.value === undefined ? (e.target.checked ? 1 : 0) : e.target.value;
            let component = ownProps.data.interface_name === 'eth1' ? 'dedicatePort' : 'sharedPort';
            if(key === "ipv4_enable" || key === "ipv4_dhcp_enable"){
                dispatch(changeErrorStatus('network','ipv4AddressError',false));
                dispatch(changeErrorStatus('network','ipv4SubnetError',false));
                dispatch(changeErrorStatus('network','ipv4GatewayError',false));
            }else if(key=== "ipv6_enable" || key === "ipv6_dhcp_enable"){
                dispatch(changeErrorStatus('network','ipv6AddressError',false));
                dispatch(changeErrorStatus('network','ipv6PrefixError',false));
                dispatch(changeErrorStatus('network','ipv6GatewayError',false));
            }else if(key === "vlan_enable"){
                dispatch(changeErrorStatus('network','vlanIDError',false));
                dispatch(changeErrorStatus('network','vlanPriorityError',false));
            }
            dispatch(actionCreators.networkValueChange(component,key,value));
            dispatch(actionCreators.jdugeDisableStatus());
        },
        handleChangeErrorStatus(key,value){
            dispatch(changeErrorStatus('network',key,value));
        },
        handleSaveNetworkData(data){
            dispatch(actionCreators.saveDedicatePortCfg(data));
        },
        clearErrorStatus(){
            dispatch(clearErrorStatus('network'));
        },
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Config);