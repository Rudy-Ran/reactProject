import React,{useEffect} from 'react';
import './dashboard.less';
import Title from '@/common/components/subSection/subSectionTitle.jsx';
import Status from './components/Status.jsx';
import Info from './components/Info.jsx';
import Session from './components/Session.jsx';
import * as actionCreators from './store/actionCreators.js';
import {connect} from 'react-redux';
function DashBoard(props){
    const {getDashboardDataDispatch} = props;
    useEffect(()=>{
        getDashboardDataDispatch();
    },[]);
    return(
        <div>
        <Title title={'基本状态'}/>
        <Status/>
        <Title title={'基本信息'}/>
        <Info />
        <Title title={'用户会话'}/>
        <Session/>
    </div>
    )
}
const mapStateToProps = (state)=>{
    return{

    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getDashboardDataDispatch:()=>dispatch(actionCreators.getDashboardData())
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(DashBoard);

