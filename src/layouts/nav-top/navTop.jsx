import React from 'react';
import '../style.css';
import {connect} from 'react-redux';
import * as actionCreators from '@/common/store/actionCreators.js';
class NavTop extends React.Component{
    render(){
        const {handleLoginOut,uidStatus,powerStatus} = this.props;
        let uidClass;
        if(uidStatus === 0){
            uidClass = 'uid-icon-off';
        }else if(uidStatus === 1){
            uidClass = 'uid-icon-on';
        }else {
            uidClass = 'uid-icon-twink';
        }
        return(
            <div>
                <ul className="headerWrapper">
                    <li><span className="icons-exit" onClick={()=>handleLoginOut()}></span></li>
                    <li><span className="icons-lang-en"></span></li>
                    <li><span className="icon-message"></span></li>
                    <li><span className={uidClass}></span></li>
                    <li><span ></span></li>
                    <li><span className="line">|</span></li>
                    <li><span className="username">admin</span></li>
                    <li><span className="icons-user"></span></li>
                </ul>
            </div>
        );
    }
    componentDidMount(){
        this.props.handleLedStatus();
    }
    loginOut(){
        
    }
}
const mapStateToProps = state =>{
    return{
        uidStatus:state.getIn(['common','uidStatus','status']),
        powerStatus:state.getIn(['common','powerStatus','power_status']),
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        handleLoginOut(){
            dispatch(actionCreators.changeLoginStatus(false));
        },
        handleLedStatus(){
            dispatch(actionCreators.getUIDStatus());
            dispatch(actionCreators.getPowerStatus());
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(NavTop);
