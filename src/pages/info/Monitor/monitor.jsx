/* eslint-disable no-undef */
import React from 'react';
import {Tabs} from 'antd';
import {connect} from 'react-redux';
import Charts from '@/common/components/Charts/Chart.jsx';
import * as actionCreators from './store/actionCreators.js';
const TabPane = Tabs.TabPane;
class Monitor extends React.Component{
    render(){
        const {alias,CPUCurveData,MEMCurveData,changeActiveKey} = this.props;
        return(
            <div>
                <Tabs defaultActiveKey="1" animated={false} onChange={(activeKey)=>{changeActiveKey(activeKey)}}>
                    <TabPane tab = "CPU使用率曲线图" key = "1">
                        <Charts data={CPUCurveData.historical_cpu} alias = {alias}/>
                    </TabPane>
                    <TabPane tab = "MEM使用率曲线图" key = "2">
                        <Charts data={MEMCurveData.historical_mem  } alias = {alias}/>
                    </TabPane>
                    <TabPane tab = "传感器信息曲线图" key ="3">{'未完待续，敬请期待'}</TabPane>
                </Tabs>    
            </div>
        );
    }
    componentDidMount(){
        this.props.getCPUData();
    }
}
const mapStateToProps = state =>{
    return{
        CPUCurveData:state.getIn(['monitor','cpu_data']),
        MEMCurveData:state.getIn(['monitor','mem_data']) ? state.getIn(['monitor','mem_data']) : [],
        alias:state.getIn(['monitor','alias']),
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        getCPUData(){
            dispatch(actionCreators.getCPUCurveData());
        },
        changeActiveKey(activeKey){
            switch(parseInt(activeKey)){
                case 1:
                    dispatch(actionCreators.getCPUCurveData());
                    break;
                case 2:
                    dispatch(actionCreators.getMemCurveData());
                    break;
                default:
                    dispatch(actionCreators.getCPUCurveData());
                    break;
            }
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Monitor);