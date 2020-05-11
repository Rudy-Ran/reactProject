import React,{useEffect} from 'react';
import { Spin,Tabs} from 'antd';
import Basic from './components/Basic.jsx';
import Config from './components/Config.jsx';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators.js';
import H3CModal from '@/common/components/Modal/H3CModal.jsx';
const TabPane = Tabs.TabPane;
const Network = props => {
    const {sharedData,modalVisible,modalContent,errors,networkData} = props;
    const {getNetoworkDataDispatch} = props;
    const sharedDataJS = sharedData ? sharedData.toJS() : {};
    const networkDataJS = networkData ? networkData.toJS(): {};
    useEffect(() => {
        getNetoworkDataDispatch();
    }, []);
    return(
        <Spin size="large" spinning = {false}>
        <Tabs defaultActiveKey="1" animated={false}> 
            <TabPane tab = "概况" key = "1"><Basic data={sharedDataJS} type={'sharedPort'}/></TabPane>
            <TabPane tab = "配置" key = "2"><Config data = {sharedDataJS} initData = {networkDataJS} errors={errors} type={'sharedPort'}/></TabPane>
            <TabPane tab = "网卡选择" key = "3">3</TabPane>
        </Tabs> 
        <H3CModal visible={modalVisible} content={modalContent}/>
    </Spin>
    )
}
const mapStateToProps = state=>{
    return {
        sharedData:state.getIn(['network','sharedData']),
        errors:state.getIn(['network','errors']).toJS(),
        networkData:state.getIn(['network','networkData']),
        modalVisible:state.getIn(['common','modalVisible']),
        modalContent:state.getIn(['common','modalContent'])
    };
};
const mapDispatchToProps = dispatch=> {
    return{
        getNetoworkDataDispatch(){
            dispatch(actionCreators.getNetWorkData());
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Network));