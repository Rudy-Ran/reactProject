import React from 'react';
import Title from '@/common/components/subSection/subSectionTitle.jsx';
import './dashboard.css';
import Status from './components/Status.jsx';
import * as actionCreators from './store/actionCreators.js';
import Info from './components/Info.jsx';
import Session from './components/Session.jsx';
import {connect} from 'react-redux';
class DashBoard extends React.Component {
    componentDidMount(){
        this.props.getAllData();
    }
    render() {
        return (
            <div>
                <Title title={'基本状态'}/>
                <Status/>
                <Title title={'基本信息'}/>
                <Info />
                <Title title={'用户会话'}/>
                <Session/>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getAllData:()=>dispatch(actionCreators.getData())
    };
};
export default connect(null,mapDispatchToProps)(DashBoard);

