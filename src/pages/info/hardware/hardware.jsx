import React from 'react';
import {Tabs} from 'antd';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators.js';
import HardWareItem from './components/hardwareItem.jsx';
const TabPane = Tabs.TabPane;
class HardWare extends React.Component{
    componentDidMount(){
        this.props.getCPUSData();
    }
    render(){
        const {CPUSData,CPUColumns,ProcessorsData,ProcessorsColums,FansData,FansColums,PowerData,PowerColums, changeActiveKey} = this.props;
        return(
            <Tabs defaultActiveKey="1" animated={false}  onChange={(activeKey)=>{changeActiveKey(activeKey)}}> 
                <TabPane tab = "CPUS" key = "1"><HardWareItem dataSource={CPUSData.length > 0 ? CPUSData :[]} columns={CPUColumns}/></TabPane>
                <TabPane tab = "处理器" key = "2"><HardWareItem dataSource={ProcessorsData.length > 0 ? ProcessorsData :[]} columns={ProcessorsColums}/></TabPane>
                <TabPane tab = "内存" key = "3">{'未完待续，敬请期待'}</TabPane>
                <TabPane tab = "存储" key = "4">{'未完待续，敬请期待'}</TabPane>
                <TabPane tab = "风扇" key = "5"><HardWareItem dataSource={FansData.length > 0 ? FansData :[]} columns={FansColums}/></TabPane>
                <TabPane tab = "电源" key = "6"><HardWareItem dataSource={PowerData.length > 0 ? PowerData :[]} columns={PowerColums}/></TabPane>
                <TabPane tab = "网卡" key = "7">{'未完待续，敬请期待'}</TabPane>
                <TabPane tab = "PCIe卡" key = "8">{'未完待续，敬请期待'}</TabPane>
                <TabPane tab = "NVMe" key = "9">{'未完待续，敬请期待'}</TabPane>
            </Tabs>    
        );
    }
}
const mapStateToProps = (state) => {
    return {
        indexKey:state.getIn(['hardware','indexKey']),
        CPUSData:state.getIn(['hardware','CPUSData']),
        ProcessorsData:state.getIn(['hardware','ProcessorsData']),
        FansData:state.getIn(['hardware','FansData']),
        PowerData:state.getIn(['hardware','PowerData']),
        CPUColumns:state.getIn(['hardware','CPUColumns']).toJS(),
        ProcessorsColums:state.getIn(['hardware','ProcessorsColums']).toJS(),
        FansColums:state.getIn(['hardware','FansColums']).toJS(),
        PowerColums:state.getIn(['hardware','PowerColums']).toJS(),
    };
};
const mapDispatchToProps = dispatch => {
    return{
        getCPUSData(){
            dispatch(actionCreators.getCPUSData());
        },
        changeActiveKey(activeKey){
            switch(parseInt(activeKey)){
                case 1:{
                    dispatch(actionCreators.getCPUSData());
                    break;
                }
                case 2:{
                    dispatch(actionCreators.getProcessorsData());
                    break;
                }
                case 5:{
                    dispatch(actionCreators.getFansData());
                    break;
                }
                case 6:{
                    dispatch(actionCreators.getPowerData());
                    break;
                }
                default:
                    dispatch(actionCreators.getCPUSData());
                    break;
            }
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps,)(HardWare);
