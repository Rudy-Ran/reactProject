import React from 'react';
import { connect } from "react-redux";
import { Row, Col, Radio, Input, Button} from "antd";
import * as actionCreators from '../store/actionCreators.js';
import {clearErrorStatus,changeErrorStatus} from '@/common/store/actionCreators.js';
import {isHostName} from '@/utils/common.js';
import {dialog} from '@/utils/h3c.dialog.js';
class HostNameCfg extends React.PureComponent{
    render(){
        const {hostData,error,handleValueChange,} = this.props;
        const RadioGroup = Radio.Group;
        return(
            <div>
                <Row>
                    <Col span={8}>主机设置</Col>
                    <Col span={12}>
                        <RadioGroup name="host_config" value={hostData.host_config}  
                            onChange={(e)=> handleValueChange(e)} >
                            <Radio value={0}>手动</Radio>
                            <Radio value={1}>自动</Radio>
                        </RadioGroup>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>主机名</Col>
                    <Col span={6}>
                        <Input name="host_name" value={hostData.host_name} disabled = {hostData.host_config ? true : false}
                            className = {error.hostError ? 'error-input' : ''}
                            onChange={(e)=> handleValueChange(e)}/>
                    </Col>
                    <Col span={2} className = {error.hostError ? 'error' : 'hide'}>
                        无效的主机名
                    </Col>
                </Row>
                <Row>
                    <Col span={8} />
                    <Col span={12}>
                        <Button type="primary" onClick={()=> this.saveHostNameData()}>保存</Button>
                    </Col>
                </Row>
            </div>
        );
    }
    saveHostNameData(){
        var obj = this;
        if(obj.validateHostNameData(this.props.hostData)){
            dialog.confirm('浏览器会话将失去连接。确认是否要修改主机名配置?',function(){
            });
        }
    }
    validateHostNameData(data) {
        if(data.host_config === 0 && !isHostName(data.host_name)){
            this.props.handleChangeErrorStatus('host','hostError',true);
            return false;
        }else {
            this.props.handleChangeErrorStatus('host','hostError',false); 
        }
        return true;
    }
}
const mapStateToProps = state => {
    TODO: //为什么error信息打印出来是一个Map 而hostData的数据不是 ? immutableJS 的锅
    return {
        hostData: state.getIn(['dns','hostData']).toJS(),
        error:state.getIn(['common','error','host']).toJS()
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleValueChange(e){
            dispatch(actionCreators.hostValueChange(e.target.name,e.target.value));
            if(e.target.name === 'host_config' && e.target.value === 1){
                dispatch(clearErrorStatus('host'));
            }
        },
        handleChangeErrorStatus(component,key,value){
            dispatch(changeErrorStatus(component,key,value));
        },
        handleSaveHostData(){
            dispatch(actionCreators.saveHostName());
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(HostNameCfg);