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
        const {networkData,modalVisible,modalContent} = this.props;
        return(
            <Spin size="large" spinning = {false}>
                <Tabs defaultActiveKey="1" animated={false}> 
                    <TabPane tab = "概况" key = "1"><Basic data={networkData} type={'eth0'}/></TabPane>
                    <TabPane tab = "配置" key = "2"><Config data = {networkData} type={'eth0'}/></TabPane>
                    <TabPane tab = "网卡选择" key = "3">3</TabPane>
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
        networkData:state.getIn(['network','sharedPort']),
        modalVisible:state.getIn(['common','modalVisible']),
        modalContent:state.getIn(['common','modalContent'])
    };
};
const mapDispatchToProps = dispatch=> {
    return{
        getAllData(){
            dispatch(actionCreators.getNetWorkData());
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Network);