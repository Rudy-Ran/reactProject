import React from 'react';
import {Row,Col,Radio,Button,Modal} from 'antd';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators.js';
import {dialog} from '@/utils/h3c.dialog.js';
class Bond extends React.PureComponent{
    render(){
        const RadioGroup = Radio.Group;
        const {handleValueChange,bond_enable,disableRadio} = this.props;
        return(
            <div>
                <Row>
                    <Col span={8}>选择模式</Col>
                    <Col span={12}>
                        <RadioGroup name="bond_enable" value={bond_enable} 
                            onChange={(e)=> handleValueChange(e)}>
                            <Radio value={1} disabled = {disableRadio}>Bonding模式</Radio>
                            <Radio value={0} >正常模式</Radio>
                        </RadioGroup>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} />
                    <Col span={12}>
                        <Button type="primary" disabled={disableRadio} onClick={()=> this.saveBondCfg()}>保存</Button>
                    </Col>
                </Row>
            </div>
        );
    }
    saveBondCfg(){
        const {bond_enable,init_bond_enable,handleSaveBondCfg} = this.props;
        if(bond_enable === init_bond_enable){
            dialog.notify('error','Bonding配置未发生变化');
        }else {
            dialog.confirm('HDM将重置，浏览器会话会失去连接。确认是否要修改Bonding 配置?',function(){
                handleSaveBondCfg(bond_enable);
            });
        }
    }
}
const mapStateToProps = state=>{
    return{
        bond_enable:state.getIn(['portmode','bond_enable']),
        init_bond_enable:state.getIn(['portmode','init_bond_enable']),
        disableRadio:state.getIn(['portmode','init_dedicate_first_enable']) ? true : false
    };
};
const mapDispatchToProps = dispatch=>{
    return{
        handleValueChange(e){
            if(e.target.value === 1){
                dialog.warning('bonding模式开启后，将无法启用网口自适应模式。');
            }
            dispatch(actionCreators.valueChange(e.target.name,e.target.value));
        },
        handleSaveBondCfg(data){
            let params = {
                "bond_enable":data
            };
            dispatch(actionCreators.saveBondCfg(params));
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Bond);