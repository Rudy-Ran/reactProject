import React from 'react';
import '../style.css';
import {connect} from 'react-redux';
import * as actionCreators from '@/common/store/actionCreators.js';
import {Redirect} from 'react-router-dom';
import {dialog} from '@/utils/h3c.dialog.js';
class NavTop extends React.Component{
    render(){
        const {isLogin,handleLoginOut} = this.props;
        if(isLogin){
            return(
                <div>
                    <ul className="headerWrapper">
                        <li><span className="icons-exit" onClick={()=>this.loginOut()}></span></li>
                        <li><span className="icons-lang-en"></span></li>
                        <li><span className="icon-message"></span></li>
                        <li><span className="uid-icon"></span></li>
                        <li><span className="power-icon"></span></li>
                        <li><span className="line">|</span></li>
                        <li><span className="username">admin</span></li>
                        <li><span className="icons-user"></span></li>
                    </ul>
                </div>
            );
        }else {
            return(
                <Redirect to="/login"/>
            );
        }

    }
    loginOut(){
        var obj = this;
        dialog.confirm('是否确认退出HDM？',function(){
            obj.props.handleLoginOut()
        });
    }
}
const mapStateToProps = state =>{
    return{
        isLogin:state.getIn(['common','isLogin'])
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        handleLoginOut(){
            dispatch(actionCreators.changeLoginStatus(false));
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(NavTop);
