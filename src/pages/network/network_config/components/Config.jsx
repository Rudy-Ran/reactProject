/* eslint-disable one-var-declaration-per-line */
import React from 'react';
import {Input,Checkbox,Button,Form} from 'antd';
import {connect} from 'react-redux';
import Title from "@/common/components/subSection/subSectionTitle.jsx";
import * as actionCreators from '../store/actionCreators.js';
import {IP,checkIPV6,isSubnet} from '@/utils/common.js';
import {dialog} from '@/utils/h3c.dialog.js';
const FormItem = Form.Item;
const Config = props => {
        const { getFieldDecorator} = props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 2,offset:1},
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { 
                    span: 4,
                    offset:6 
                },
            },
        };
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:9
                }
            }
        };
        //判断Input disable 状态
        const {data} = props;
        let ipv4Flag = (!data.ipv4_enable || data.ipv4_dhcp_enable) ? true : false;
        let ipv6Flag = (!data.ipv6_enable || data.ipv6_dhcp_enable) ? true : false;
        let vlanFlag = data.vlan_enable ? true : false;
        return(
            <Form labelalign="left">
                <Title title={'IPv4配置'}/>
                <FormItem label="IPv4配置" {...formItemLayout}>
                    {getFieldDecorator('ipv4_enable',{
                        valuePropName:'checked'
                    })(
                        <Checkbox /> 
                    )}
                </FormItem>
                <FormItem label="自动获取IP地址" {...formItemLayout}>
                    {getFieldDecorator('ipv4_dhcp_enable',{
                        valuePropName:'checked'
                    })(
                        <Checkbox disabled = {data.ipv4_enable ? false : true} /> 
                    )}
                </FormItem>
                <FormItem label="IPv4地址" {...formItemLayout}>
                    {getFieldDecorator('ipv4_address',{
                        rules:[{
                            validator:ipv4Flag ? '' : (rule,value,callback)=>validateCfg(rule,value,callback),
                        }]
                    })(
                        <Input disabled = {ipv4Flag} /> 
                    )}
                </FormItem>
                <FormItem label="子网掩码" {...formItemLayout}>
                    {getFieldDecorator('ipv4_subnet',{
                        rules:[{
                            validator:ipv4Flag ? '' : (rule,value,callback)=>validateCfg(rule,value,callback)
                        }]
                    })(
                        <Input disabled = {ipv4Flag}/> 
                    )}
                </FormItem>
                <FormItem label="默认网关" {...formItemLayout}>
                    {getFieldDecorator('ipv4_gateway',{
                        rules:[{
                            validator:ipv4Flag ? '' : (rule,value,callback)=>validateCfg(rule,value,callback)
                        }]
                    })(
                        <Input disabled = {ipv4Flag}/> 
                    )}
                </FormItem>
                <Title title={'IPv6配置'}/>
                <FormItem label="IPv6配置" {...formItemLayout}>
                    {getFieldDecorator('ipv6_enable',{
                        valuePropName:'checked'
                    })(
                        <Checkbox /> 
                    )}
                </FormItem>
                <FormItem label="自动获取IP地址" {...formItemLayout}>
                    {getFieldDecorator('ipv6_dhcp_enable',{
                        valuePropName:'checked'
                    })(
                        <Checkbox disabled = {data.ipv6_enable ? false : true} /> 
                    )}
                </FormItem>
                <FormItem label="IPv6地址" {...formItemLayout}>
                    {getFieldDecorator('ipv6_address',{
                        rules:[{
                            validator:ipv6Flag ? '' : (rule,value,callback)=>validateCfg(rule,value,callback)
                        }]
                    })(
                        <Input disabled = {ipv6Flag}/> 
                    )}
                </FormItem>
                <FormItem label="默认网关" {...formItemLayout}>
                    {getFieldDecorator('ipv6_gateway',{
                        rules:[{
                            validator:ipv6Flag ? '' : (rule,value,callback)=>validateCfg(rule,value,callback)
                        }]
                    })(
                        <Input disabled = {ipv6Flag} /> 
                    )}
                </FormItem>
                <FormItem label="子网前缀长度" {...formItemLayout}>
                    {getFieldDecorator('ipv6_prefix',{
                        rules:[{
                            pattern: new RegExp(/^[0-9]\d*$/, "g"),
                            validator:ipv6Flag ? '' : (rule,value,callback)=>validateCfg(rule,value,callback)
                        }]
                    })(
                        <Input disabled = {ipv6Flag}/> 
                    )}
                </FormItem>
                <Title title={'VLAN设置'}/>
                <FormItem label="VLAN设置" {...formItemLayout}>
                    {getFieldDecorator('vlan_enable',{
                        valuePropName:'checked'
                    })(
                        <Checkbox  /> 
                    )}
                </FormItem>
                <FormItem label="VLAN ID" {...formItemLayout}>
                    {getFieldDecorator('vlan_id',{
                        rules:[{
                            pattern: new RegExp(/^[0-9]\d*$/, "g"),
                            validator:vlanFlag ? (rule,value,callback)=>validateCfg(rule,value,callback) : ''
                        }]
                    })(
                        <Input disabled = {!vlanFlag}/> 
                    )}
                </FormItem>
                <FormItem label="VLAN优先级" {...formItemLayout}>
                    {getFieldDecorator('vlan_priority',{
                        rules:[{
                            pattern: new RegExp(/^[0-9]\d*$/, "g"),
                            validator:vlanFlag ? (rule,value,callback)=>validateCfg(rule,value,callback) : ''
                        }]
                    })(
                        <Input disabled = {!vlanFlag}/> 
                    )}
                </FormItem>
                <FormItem {...offsetLayout}>
                    <Button type="primary" onClick={(e)=>handleSubmit(props)}>登录</Button>
                </FormItem>
            </Form>
        );
}
//自定义表单校验规则
//校验IPv4地址
const validateCfg = (rule,value,callback) =>{
    switch(rule.field){
        case "ipv4_address":
            IP.checkAll(value) ? callback() : callback("IP地址不合法");
            break;
        case "ipv4_subnet":
            isSubnet(value) ? callback() : callback("无效的IPv4子网");
            break;
        case "ipv4_gateway":
            (value !== '0.0.0.0.0' &&  IP.checkAll(value)) ? callback():callback("无效的默认网关");
            break;
        case "ipv6_address":
            checkIPV6(value,false,false) ? callback() : callback('无效的IPv6地址');
            break;
        case "ipv6_gateway":
            checkIPV6(value,false,false) ? callback() : callback('无效的默认网关');
            break;
        case "ipv6_prefix":
            (/^\d+$/.test(value) && value > 0 && value < 128) ?callback() : callback('无效的子网掩码');
            break;
        case "vlan_id":
            (/^\d+$/.test(value) && (value >= 2 && value <= 4094)) ? callback() : callback('无效的VLAN ID');
            break;
        case "vlan_priority":
            (/^\d+$/.test(value) && value >= 0 && value <= 7) ? callback() : callback('无效的VLAN优先级');
            break;
        default:
            callback();
            break;
    }
}
const handleSubmit = (props) => {
    console.log(props.type)
    const port = props.type === 'dedicatePort' ? '专用网口' : '共享网口'
    props.form.validateFields((err, values) => {
        if (!err) {
            dialog.confirm('浏览器会话将失去连接。确认是否要修改'+port+'配置?',function(){
                
            });
        }
    });
}
const CustomConfig = Form.create({
    onFieldsChange(props, fields) {
        //注：onFieldsChange方法会执行两次  --- 感觉算是antd优化做的不好
        // fields里面不仅包含了value，也包含了error的值，error也要用redux存储起来，否则会不生效
        let errorObj = {};
        let valueObj = {};
        let initData  = props.type === 'dedicatePort' ? props.initData[1] :  props.initData[0];
        for(var key in fields){
            valueObj[fields[key].name] = fields[key].value;
            if((fields[key].name === "ipv4_enable" && !fields[key].value) || (fields[key].name === "ipv4_dhcp_enable" && fields[key].value)){
                //如果关闭了IPv4配置或者 开启了自动获取IP地址，则把数据初始化
                props.dispatch(actionCreators.networkValueChange(props.type,Object.assign(valueObj,{
                    "ipv4_address":initData.ipv4_address,
                    "ipv4_subnet":initData.ipv4_subnet,
                    "ipv4_gateway":initData.ipv4_gateway
                })));
                //清空errors
                props.dispatch(actionCreators.handleErrorChange({
                    "ipv4_address":"",
                    "ipv4_subnet":"",
                    "ipv4_gateway":""
                }));
            }else if((fields[key].name === "ipv6_enable" && !fields[key].value) || (fields[key].name === "ipv6_dhcp_enable" && fields[key].value)){
                props.dispatch(actionCreators.networkValueChange(props.type,Object.assign(valueObj,{
                    "ipv6_address":initData.ipv6_address,
                    "ipv6_gateway":initData.ipv6_gateway,
                    "ipv6_prefix":initData.ipv6_prefix
                })));
                //清空errors
                props.dispatch(actionCreators.handleErrorChange({
                    "ipv6_address":"",
                    "ipv6_gateway":"",
                    "ipv6_prefix":""
                }));
            }else if(fields[key].name === "vlan_enable" && !fields[key].value){
                props.dispatch(actionCreators.networkValueChange(props.type,Object.assign(valueObj,{
                    "vlan_id":initData.vlan_id,
                    "vlan_priority":initData.vlan_priority,
                })));
                //清空errors
                props.dispatch(actionCreators.handleErrorChange({
                    "vlan_id":"",
                    "vlan_priority":""
                }));
            }else{
                props.dispatch(actionCreators.networkValueChange(props.type,valueObj));
                //如果fields里面有errors字段,把错误提示信息写入reducer的errors对象
                if(typeof(fields[key].errors) !== "undefined"){
                    errorObj[fields[key].name] = fields[key].errors[0].message;
                }else {
                //如果没有errors字段，errors对应的提示信息置为空
                    errorObj[fields[key].name] = "";
                }
                props.dispatch(actionCreators.handleErrorChange(errorObj));
            }
        }
    },
    mapPropsToFields (props) {
        //通过initiavalue 指定的初始值，只在第一次render 中起作用，如果通过API获取数据之后，表单数据不变
        //TODO:这个地方可以优化下
        return {
            ipv4_enable: Form.createFormField({
                value: props.data.ipv4_enable,
            }),
            ipv4_dhcp_enable:Form.createFormField({
                value: props.data.ipv4_dhcp_enable
            }),
            ipv4_address: Form.createFormField({
                value: props.data.ipv4_address,
                errors:props.errors.ipv4_address ? [new Error(props.errors.ipv4_address)] : ''
            }),
            ipv4_subnet: Form.createFormField({
                value: props.data.ipv4_subnet,
                errors:props.errors.ipv4_subnet ? [new Error(props.errors.ipv4_subnet)] : ''
            }),
            ipv4_gateway: Form.createFormField({
                value: props.data.ipv4_gateway,
                errors:props.errors.ipv4_gateway ? [new Error(props.errors.ipv4_gateway)] : ''
            }),
            ipv6_enable: Form.createFormField({
                value: props.data.ipv6_enable
            }),
            ipv6_dhcp_enable: Form.createFormField({
                value: props.data.ipv6_dhcp_enable
            }),
            ipv6_address: Form.createFormField({
                value: props.data.ipv6_address,
                errors:props.errors.ipv6_address ? [new Error(props.errors.ipv6_address)] : ''
            }),
            ipv6_gateway: Form.createFormField({
                value: props.data.ipv6_gateway,
                errors:props.errors.ipv6_gateway ? [new Error(props.errors.ipv6_gateway)] : ''
            }),
            ipv6_prefix: Form.createFormField({
                value: props.data.ipv6_prefix,
                errors:props.errors.ipv6_prefix ? [new Error(props.errors.ipv6_prefix)] : ''
            }),
            vlan_enable: Form.createFormField({
                value: props.data.vlan_enable
            }),
            vlan_id: Form.createFormField({
                value: props.data.vlan_id,
                errors:props.errors.vlan_id ? [new Error(props.errors.vlan_id)] : ''
            }),
            vlan_priority: Form.createFormField({
                value: props.data.vlan_priority,
                errors:props.errors.vlan_priority ? [new Error(props.errors.vlan_priority)] : ''
            })
        };
    }
})(Config);

export default connect()(React.memo(CustomConfig));