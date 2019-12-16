import React from 'react';
import Title from "@/common/components/subSection/subSectionTitle.jsx";
import Bond from './components/Bond.jsx';
import {dialog} from '@/utils/h3c.dialog.js';
import * as actionCreators from './store/actionCreators.js';
import {connect} from 'react-redux';
import AdaptPort from './components/AdaptPort.jsx';
import H3CModal from '@/common/components/Modal/H3CModal.jsx';
import { Spin,Alert } from 'antd';
class PortMode extends React.Component{
    render(){
        const {showWait,modalVisible,modalContent,dedicate_first_enable,init_dedicate_first_enable,disableRadio,handleValueChange,handleSaveNetPortCfg,saveNetPortCfg} = this.props;
        return(
            <Spin size="large" spinning = {showWait}>
                <H3CModal visible={modalVisible} content={modalContent}/>
                <Alert message="开启网口自适应模式后，HDM会优先使用专用网口进行网络通信，在专用网口未连接时，会自动跳转到共享网口" type="info" showIcon />
                <Title title="Bonding配置"/>
                <Bond/>
                <Title title="网口自适应模式"/>
                <AdaptPort data = {this.props} saveNetPortCfg={(()=>{this.saveNetPortCfg()})}/>
            </Spin>
        );
    }
    componentDidMount(){
        this.props.initData();
    }
    saveNetPortCfg(){
        // if(dedicate_first_enable === init_dedicate_first_enable){
        //     dialog.notify('error','网口自适应模式配置未发生变化');
        // }else {
        //     dialog.confirm('HDM将重置，浏览器会话会失去连接。确认是否要修改网口自适应模式配置？',function(){
        //         handleSaveNetPortCfg(dedicate_first_enable);
        //     });
        // }
        console.log('---------');
    }
}
const mapStateToProps = state=>{
    return{
        showWait:state.getIn(['common','showWait']),
        modalVisible:state.getIn(['common','modalVisible']),
        modalContent:state.getIn(['common','modalContent']),
        dedicate_first_enable:state.getIn(['portmode','dedicate_first_enable']),
        init_dedicate_first_enable:state.getIn(['portmode','init_dedicate_first_enable']),
        disableRadio:state.getIn(['portmode','init_bond_enable']) ? true : false
    };
};
const mapDispatchToProps = dispatch=>{
    return{
        initData(){
            dispatch(actionCreators.getData());
        },
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
export default connect(mapStateToProps,mapDispatchToProps)(PortMode);