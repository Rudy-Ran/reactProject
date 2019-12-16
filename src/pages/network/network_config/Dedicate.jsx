import React from 'react';
import { Spin,Tabs} from 'antd';
import Basic from './components/Basic.jsx';
import Config from './components/Config.jsx';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators.js';
import H3CModal from '@/common/components/Modal/H3CModal.jsx';
const TabPane = Tabs.TabPane;
class Network extends React.Component{
    render(){
        const {dedicateData,modalVisible,modalContent,errors,initData} = this.props;
        return(
            <Spin size="large" spinning = {false}>
                <Tabs defaultActiveKey="1" animated={false}> 
                    <TabPane tab = "概况" key = "1"><Basic data={dedicateData}  type={'dedicatePort'} /></TabPane>
                    <TabPane tab = "配置" key = "2"><Config data = {dedicateData} initData = {initData} errors={errors} type = {'dedicatePort'}/></TabPane>
                </Tabs> 
                <H3CModal visible={modalVisible} content={modalContent}/>
            </Spin>
        );
    }
    componentDidMount(){
        this.props.getAllData();
    }
}
const mapStateToProps = state=>{
    return {
        dedicateData:state.getIn(['network','dedicatePort']).toJS(),
        errors:state.getIn(['network','errors']).toJS(),
        initData:state.getIn(['network','initNetworkData']),
        modalVisible:state.getIn(['common','modalVisible']),
        modalContent:state.getIn(['common','modalContent'])
    };
};
const mapDispatchToProps = dispatch=> {
    return{
        getAllData(){
            dispatch(actionCreators.getNetWorkData());
        },
        handleValueChange(key,value){
            // let component = ownProps.data.interface_name === 'eth1' ? 'dedicatePort' : 'sharedPort';
            dispatch(actionCreators.networkValueChange('dedicatePort',key,value));
            // dispatch(actionCreators.jdugeDisableStatus());
        },
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Network);