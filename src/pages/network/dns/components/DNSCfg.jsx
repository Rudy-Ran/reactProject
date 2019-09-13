import React from 'react';
import { connect } from "react-redux";
import { Row, Col, Radio, Input, Button, Checkbox,Form } from "antd";
import * as actionCreators from '../store/actionCreators.js';
import {clearErrorStatus,changeErrorStatus} from '@/common/store/actionCreators.js';
import {IP,checkIPV6} from '@/utils/common.js';
import {dialog} from '@/utils/h3c.dialog.js';
class DNSCfg extends React.PureComponent{
    render(){
        const {dnsData,handleValueChange,isInputDisable,isRadioDisable,error} = this.props;
        const RadioGroup = Radio.Group;
        return(
            <div>
                <Row>
                    <Col span={8}>域名服务配置</Col>
                    <Col span={12}>
                        <Checkbox name="dns_status" checked={dnsData.dns_status} onChange={(e)=>handleValueChange(e)}>启用</Checkbox>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>DNS服务器设置</Col>
                    <Col span={12}>
                        <RadioGroup name="dns_manual" value={dnsData.dns_manual} disabled = {isRadioDisable}
                            onChange={(e)=>handleValueChange(e)}>
                            <Radio value={0}>手动</Radio>
                            <Radio value={1}>自动获取IPv4 DNS地址</Radio>
                            <Radio value={2}>自动获取IPv6 DNS地址</Radio>
                        </RadioGroup>
                    </Col>
                </Row>
                <Row className={(dnsData.dns_manual === 0) ? 'hide' : ''}>
                    <Col span={8}>动态注册选项</Col>
                    <Col span={12}>
                        <RadioGroup name="register_manual" value={dnsData.register_manual} disabled = {isRadioDisable}
                            onChange={(e)=>handleValueChange(e)}>
                            <Radio value={0}>主机名</Radio>
                            <Radio value={1}>DHCP Client FQDN</Radio>
                        </RadioGroup>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>上级域名</Col>
                    <Col span={4}>
                        <Input placeholder="" value={dnsData.domain_name} name="domain_name" disabled = {isInputDisable}
                            className = {error.domainError ? 'error-input' : ''}
                            onChange={(e)=>handleValueChange(e)}/>
                    </Col>
                    <Col span={2} className = {error.domainError ? 'error' : 'hide'}>
                        无效的上级域名
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>DNS服务器1</Col>
                    <Col span={4}>
                        <Input placeholder="" name="dns_server1" value={dnsData.dns_server1} disabled = {isInputDisable}
                            className = {error.server1Error ? 'error-input' : ''}
                            onChange={(e)=>handleValueChange(e)}/>
                    </Col>
                    <Col span={2} className = {error.server1Error ? 'error' : 'hide'}>
                        无效的DNS服务器1
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>DNS服务器2</Col>
                    <Col span={4}>
                        <Input placeholder="" value={dnsData.dns_server2} name="dns_server2" disabled = {isInputDisable}
                            className = {error.server2Error ? 'error-input' : ''}
                            onChange={(e)=>handleValueChange(e)}/>
                    </Col>
                    <Col span={2} className = {error.server2Error ? 'error' : 'hide'}>
                        无效的DNS服务器2
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>DNS服务器3</Col>
                    <Col span={4}>
                        <Input placeholder="" name="dns_server3" value={dnsData.dns_server3} disabled = {isInputDisable}
                            className = {error.server3Error ? 'error-input' : ''}
                            onChange={(e)=>handleValueChange(e)}/>
                    </Col>
                    <Col span={2} className = {error.server3Error ? 'error' : 'hide'}>
                        无效的DNS服务器3
                    </Col>
                </Row>
                <Row>
                    <Col span={8} />
                    <Col span={12} >
                        <Button type="primary" onClick={()=>this.saveDNSData()}>保存</Button>
                    </Col>
                </Row>
            </div>
        );
    }
    saveDNSData(){
        var obj = this;
        if(obj.validDNSData(this.props.dnsData)){
            dialog.confirm('浏览器会话将失去连接。确认是否要修改DNS配置?',function(){
            });
        }
    }
    validDNSData(data){
        const {handleChangeErrorStatus,clearErrorStatus} = this.props;
        //每次校验先清空所有的error
        clearErrorStatus();
        // domain_name
        if (data.domain_name !== "" && data.dns_status === 1 && data.dns_manual === 0 && ((!(/^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9]))(.*\.)?.*\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})$/.test(data.domain_name)) || (data.domain_name.length > 64)))) {
            handleChangeErrorStatus('dns','domainError',true);
            return false;
        }else {
        }
        // dns_server1
        if (data.dns_status === 1 && data.dns_manual === 0 && !IP.checkAll(data.dns_server1) && !checkIPV6(data.dns_server1, false, false)) {
            handleChangeErrorStatus('dns','server1Error',true);
            return false;
        }else {
        }
        // dns_server2
        if ((data.dns_status === 1 && data.dns_manual === 0 && data.dns_server2 !== "" && (data.dns_server2 === data.dns_server1  || (!IP.checkAll(data.dns_server2) && !checkIPV6(data.dns_server2, false, false)))) || (data.dns_server2 === "" && data.dns_server3 !== "")) {
            handleChangeErrorStatus('dns','server2Error',true);
            return false;
        }else {
        }
        // dns_server3
        if (data.dns_status === 1 && data.dns_manual === 0 && data.dns_server3 !== "" && (data.dns_server3 === data.dns_server1 || data.dns_server3 === data.dns_server2 || (!IP.checkAll(data.dns_server3) && !checkIPV6(data.dns_server3, false, false)))) {
            handleChangeErrorStatus('dns','server3Error',true);
            return false;
        }else {
        }
        return true;
    }
}
const mapStateToProps = state => {
    return {
        dnsData: state.getIn(['dns','dnsData']).toJS(),
        isInputDisable:state.getIn(['dns','disableInput']),
        isRadioDisable:state.getIn(['dns','disableRadio']),
        error:state.getIn(['common','error','dns']).toJS()
    };
};
const mapDispatchToProps = dispatch => {
    return {
        clearErrorStatus(){
            dispatch(clearErrorStatus('dns'));
        },
        handleValueChange(e){
            //如果关闭了域名服务配置或者 服务器设置方式不是手动，清除error样式
            if((e.target.name === 'dns_status' && !e.target.checked)|| (e.target.name === 'dns_manual' && e.target.value !== 0)){
                dispatch(clearErrorStatus('dns'));
            }
            if(e.target.name === 'dns_status'){
                dispatch(actionCreators.dnsValueChange(e.target.name,e.target.checked ? 1 : 0));
            }else {
                dispatch(actionCreators.dnsValueChange(e.target.name,e.target.value));
            }
            if(e.target.name === 'dns_status' || e.target.name === 'dns_manual'){
                dispatch(actionCreators.jdugeDisableStatus());
            }
        },
        handleChangeErrorStatus(component,key,value){
            dispatch(changeErrorStatus(component,key,value));
        },
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(DNSCfg);