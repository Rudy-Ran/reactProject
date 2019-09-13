import React from 'react';
import {Row,Col,Radio,Button} from 'antd';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators.js';
import {dialog} from '@/utils/h3c.dialog.js';
class AdaptPort extends React.PureComponent{
    render(){
        const RadioGroup = Radio.Group;
        const {dedicate_first_enable,handleValueChange,disableRadio} = this.props;
        return(
            <div>
                <Row>
                    <Col span={8}>网口自适应模式</Col>
                    <Col span={12}>
                        <RadioGroup name="dedicate_first_enable" value={dedicate_first_enable} 
                            onChange={(e)=>handleValueChange(e)}>
                            <Radio value={1} disabled={disableRadio}>开启</Radio>
                            <Radio value={0}>关闭</Radio>
                        </RadioGroup>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} />
                    <Col span={12}>
                        <Button type="primary" disabled={disableRadio} onClick={()=> this.saveNetPortCfg()} >保存</Button>
                    </Col>
                </Row>
            </div>
        );
    }
    saveNetPortCfg(){
        const {dedicate_first_enable,init_dedicate_first_enable,handleSaveNetPortCfg} = this.props;
        if(dedicate_first_enable === init_dedicate_first_enable){
            dialog.notify('error','网口自适应模式配置未发生变化');
        }else {
            dialog.confirm('HDM将重置，浏览器会话会失去连接。确认是否要修改网口自适应模式配置？',function(){
                handleSaveNetPortCfg(dedicate_first_enable);
            });
        }
    }
}
const mapStateToProps = state=>{
    return{
        dedicate_first_enable:state.getIn(['portmode','dedicate_first_enable']),
        init_dedicate_first_enable:state.getIn(['portmode','init_dedicate_first_enable']),
        disableRadio:state.getIn(['portmode','init_bond_enable']) ? true : false
    };
};
const mapDispatchToProps = dispatch=>{
    return{
        handleValueChange(e){
            if(e.target.value === 1){
                dialog.warning('网口自适应模式开启后，将无法启用bonding模式');
            }
            dispatch(actionCreators.valueChange(e.target.name,e.target.value));
        },
        handleSaveNetPortCfg(data){
            let params = {
                dedicate_first_enable:data
            };
            dispatch(actionCreators.saveNetPortCfg(params));
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(AdaptPort);