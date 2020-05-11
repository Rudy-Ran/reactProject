import React,{useEffect} from "react";
import { connect } from "react-redux";
import Title from "@/common/components/subSection/subSectionTitle.jsx";
import * as actionCreators from './store/actionCreators.js';
import HostNameCfg from './components/HostNameCfg.jsx';
import DNSCfg from './components/DNSCfg.jsx';
import { Spin } from 'antd';
function DNS (props) {
    const {showWait} = props;
    return (
     
            <div>
            <Title title={'主机名配置'} />
            <HostNameCfg/>
            <Title title={'DNS配置'}/>
            {/* <DNSCfg/> */}
            </div>
   
    );
}
const mapStateToProps = state=>{
    return{
        showWait:state.getIn(['common','showWait'])
    };
};
export default connect(mapStateToProps)(DNS);
