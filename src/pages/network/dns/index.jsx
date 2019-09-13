import React from "react";
import { connect } from "react-redux";
import Title from "@/common/components/subSection/subSectionTitle.jsx";
import * as actionCreators from './store/actionCreators.js';
import HostNameCfg from './components/HostNameCfg.jsx';
import DNSCfg from './components/DNSCfg.jsx';
import { Spin } from 'antd';
class DNS extends React.Component {
    componentDidMount() {
        this.props.getAllData();
    }
    render() {
        const {showWait} = this.props;
        return (
            <Spin spinning={showWait} size="large" delay={100}>
                <Title title={'主机名配置'} />
                <HostNameCfg/>
                <Title title={'DNS配置'}/>
                <DNSCfg/>
            </Spin>
        );
    }
}
const mapStateToProps = state=>{
    return{
        showWait:state.getIn(['common','showWait'])
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getAllData: () => dispatch(actionCreators.getData()),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(DNS);
