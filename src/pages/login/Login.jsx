import React from 'react';
import './login.css';
import logoUrl from '@/images/logo1.png';
import * as actionCreators from '@/common/store/actionCreators.js';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class Login extends React.PureComponent{
    render(){
        const {isLogin,username,password,handleInputChange,loginError} = this.props;
        if(isLogin){
            return(
                <Redirect from="/login" to="/"/>
            );
        }else{
            return(
                <div id="wrapper">
                    <div className="login-wrapper">
                        <div id="login-info">
                            <div className="info-box">
                                <img src={logoUrl} id="login-logo"/>
                                <div className="dot"></div>
                                <div className="hdm-title">HDM</div>
                            </div>
                        </div>
                        <div id="login-box">
                            <div className="login-header">
                                <div className="login-help icons-login-help"></div>
                                <div className="login-language icons-login-langen"></div>
                            </div>
                            <div className="login-content">
                                <div className="input-content">
                                    <div className="login-title">
                                        <span className="loginText1 white">HDM</span>
                                        <span className="loginText2 white">登 录</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="form-content">
                                                <em className="icons-username"></em>
                                                <i className="line"></i>
                                                <input type="text" value={username} name="username" id="login-username" placeholder="请输入用户名" maxLength="16"
                                                    onChange={(e)=>handleInputChange(e)}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-content">
                                                <em className="icons-password"></em>
                                                <i className="line"></i>
                                                <input type="password" value={password} name="password" id="login-password" placeholder="请输入密码" maxLength="20"
                                                    onChange={(e)=>handleInputChange(e)}/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div  className={"login-notice"} style={{display:loginError === ""?"none":"block"}}>
                                    <em className="icons-errtips"></em>
                                    <div className="notice-lang">{loginError}</div>
                                </div>
                                <div className="login-btn">
                                    <button className="btn-login" onClick={()=>this.saveLoginData()}>登录</button>
                                </div>
                                <div className="switch">
                                    维护开关开启，请使用默认的用户名和密码登录
                                </div>
                                <span id="copyright">
                                    版权所有 2003-2017 新华三技术有限公司，保留一切权利
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    saveLoginData(){
        if(this.checkLoginData()){
            this.props.handleLogin();
        }
    }
    checkLoginData(){
        const {username,password,handleLoginError} = this.props;
        if (!(username.match(/^.{1,16}$/))) {
            handleLoginError("login","loginError","用户名不能为空");
            return false;
        }
        if (username.match(/[^0-9a-zA-Z\_\-\.]{1,16}/)) {
            handleLoginError("login","loginError","用户名仅支持字母、数字、句点（.）、连接符（-）和下划线（_）");
            return false;                    
        }
        if (!(password.match(/^.{1,20}$/))) {
            handleLoginError("login","loginError","密码不能为空，最长20位");
            return false;
        }
        handleLoginError("login","loginError","");
        return true;
    }
}
const mapStateToProps = state=>{
    return{
        isLogin:state.getIn(['common','isLogin']),
        username:state.getIn(['common','username']),
        password:state.getIn(['common','password']),
        loginError:state.getIn(['common','error',"login","loginError"])
    };
};
const mapDispatchToProps = dispatch=>{
    return{
        handleLogin(){
            dispatch(actionCreators.changeLoginStatus(true));
        },
        handleInputChange(e){
            dispatch(actionCreators.loginInputChange(e.target.name,e.target.value));
        },
        handleLoginError(component,key,value){
            dispatch(actionCreators.changeErrorStatus(component,key,value));
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);