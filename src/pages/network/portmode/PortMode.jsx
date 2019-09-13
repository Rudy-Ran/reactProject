import React from 'react';
import Title from "@/common/components/subSection/subSectionTitle.jsx";
import Bond from './components/Bond.jsx';
import * as actionCreators from './store/actionCreators.js';
import {connect} from 'react-redux';
import AdaptPort from './components/AdaptPort.jsx';
import H3CModal from '@/common/components/Modal/H3CModal.jsx';
import { Spin,Alert } from 'antd';

class PortMode extends React.Component{
    render(){
        const {showWait,modalVisible,modalContent} = this.props;
        return(
            <Spin size="large" spinning = {showWait}>
                <H3CModal visible={modalVisible} content={modalContent}/>
                <Alert message="开启网口自适应模式后，HDM会优先使用专用网口进行网络通信，在专用网口未连接时，会自动跳转到共享网口" type="info" showIcon />
                <Title title="Bonding配置"/>
                <Bond/>
                <Title title="网口自适应模式"/>
                <AdaptPort/>
            </Spin>
        );
    }
    componentDidMount(){
        this.props.initData();
    }
}
const mapStateToProps = state=>{
    return{
        showWait:state.getIn(['common','showWait']),
        modalVisible:state.getIn(['common','modalVisible']),
        modalContent:state.getIn(['common','modalContent'])
    };
};
const mapDispatchToProps = dispatch=>{
    return{
        initData(){
            dispatch(actionCreators.getData());
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(PortMode);