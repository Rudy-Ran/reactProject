import React from 'react';
import {connect} from 'react-redux';
import { Row, Col} from "antd";
import {Link} from 'react-router-dom';
import img0URL from '@/images/UID_0.gif';
import img1URL from '@/images/UID_1.gif';
import img2URL from '@/images/UID_2.gif';
import powerImg1 from '@/images/power_off.png';
import powerImg2 from '@/images/power_on.png';
class Status extends React.Component {
    initUIDStatus(){
        let uidTxt;
        let uidImgURL;
        switch(this.props.uidStatus){
            case 0:{
                uidTxt = '关闭',uidImgURL= img0URL;
                break;
            }
            case 1:{
                uidTxt = '开启',uidImgURL= img1URL;
                break;
            }
            case 2:{
                uidTxt = '闪烁',uidImgURL= img2URL;
                break;
            }
            default:break;
        }
        return(
            <Row className="led-info">          
                <Col span={12}>UID状态</Col>
                <Col span={12}>
                    <img src={uidImgURL}/>
                    <span>{uidTxt}</span>
                </Col>
            </Row>
        );
    }
    initPowerStatus(){
        let powerTxt;
        let powerImgURL;
        this.props.powerStatus ? (powerTxt = '关闭',powerImgURL = powerImg1):(powerTxt = '开启',powerImgURL = powerImg2);
        return(
            <Row className="led-info">
                <Col span={12}>服务器电源</Col>
                <Col span={12}>
                    <img src={powerImgURL}/>
                    <span>{powerTxt}</span>
                </Col>
            </Row>
        );
    }
    initTCGStatus(){
        const {tcgStatus} = this.props;
        let status;
        switch (tcgStatus.tcg_type) {
            case 0:  '不支持';
                break;
            case 1: status = 'TPM';
                break;
            case 2: status = 'TCM';
                break;
            default:  'N/A';
                break;
        }
        switch (tcgStatus.tcg_status) {
            case 0:  status + '&nbsp;' + '不在位'; 
                break;
            case 1:  status + ' ' + '已启用';
                break;
            case 2:  status + ' ' + '已禁用';
                break;
            default:  'N/A';
                break;
        }
        return(
            <Row>
                <Col span={12}>TPM/TCM状态</Col>
                <Col span={12}>{status}</Col>
            </Row>
        );
    }
    deviceCount(healthInfo){
        let count = 0;
        for(let i in healthInfo){
            if(healthInfo[i]>0){
                count++;
            }
        }
        return count-1;
    }
    stateToIcon(data){
        let iconClass;
        switch(data){
            case 0:
                iconClass = 'icons-state-ok';
                break;
            case 1:
                iconClass = 'icons-state-normal';
                break;
            case 2:
                iconClass = 'icons-state-caution';
                break;
            case 3:
                iconClass = 'icons-state-critical';
                break;
            default:break;
        }
        return iconClass;
    }
    stateToBigIcon(data){
        let iconClass;
        let txtClass;
        let txt;
        switch (data){
            case 0:
                iconClass = 'bigicons-state-ok',txtClass = 'ok',txt = '正常';
                break;
            case 1:
                iconClass = 'bigicons-state-normal',txtClass = 'normal',txt = '一般';
                break;
            case 2:
                iconClass = 'bigicons-state-caution',txtClass = 'caution',txt = '严重';
                break;
            case 3:
                iconClass = 'bigicons-state-critical',txtClass = 'critical',txt = '致命';
                break;
            default:break;
        }
        return(
            <Col span={6} className="bigStatus">
                <em className={iconClass}></em>
                <span className={txtClass}>{txt}</span>
            </Col>
        );
    }
    handleAllHealth(healthInfo){
        if(healthInfo.cc === 0){
            return(
                <Col span={12}>
                    {/* 服务器总体健康状态 */}
                    {this.stateToBigIcon(healthInfo.health)}
                    {/* 服务器健康状态详情 */}
                    <Col span={18}>
                        <span className="deviceText">设备存在 {this.deviceCount(healthInfo)} 个问题，请及时处理!</span>
                        <div className="health-icon">
                            <ul>
                                <li className={healthInfo.temperature===0 ? 'hide' : ''}>
                                    <a href="/#info/sensors/1">
                                        <span className="system-left icons-temperature-state">
                                            <em className={this.stateToIcon(healthInfo.temperature)}></em>
                                        </span>
                                        <span className="stateText">温度</span>
                                    </a>
                                </li>
                                <li className={healthInfo.power===0 ? 'hide' : ''}>
                                    <a href="/#info/sensors/1">
                                        <span className="system-left icons-power-state">
                                            <em className={this.stateToIcon(healthInfo.power)}></em>
                                        </span>
                                        <span className="stateText">电源</span>
                                    </a>
                                </li>
                                <li className={healthInfo.current===0 ? 'hide' : ''}>
                                    <a href="/#info/sensors/1">
                                        <span className="system-left icons-current-state">
                                            <em className={this.stateToIcon(healthInfo.current)}></em>
                                        </span>
                                        <span className="stateText">电流</span>
                                    </a>
                                </li>
                                <li className={healthInfo.volatge===0 ? 'hide' : ''}>
                                    <a href="/#info/sensors/1">
                                        <span className="system-left icons-volatge-state">
                                            <em className={this.stateToIcon(healthInfo.volatge)}></em>
                                        </span>
                                        <span className="stateText">电压</span>
                                    </a>
                                </li>
                                <li className={healthInfo.fans===0 ? 'hide' : ''}>
                                    <a href="/#info/sensors/1">
                                        <span className="system-left icons-fans-state">
                                            <em className={this.stateToIcon(healthInfo.fans)}></em>
                                        </span>
                                        <span className="stateText">风扇</span>
                                    </a>
                                </li>
                                <li className={healthInfo.memory===0 ? 'hide' : ''}>
                                    <a href="/#info/sensors/1">
                                        <span className="system-left icons-memory-state">
                                            <em className={this.stateToIcon(healthInfo.memory)}></em>
                                        </span>
                                        <span className="stateText">内存</span>
                                    </a>
                                </li>
                                <li className={healthInfo.processor===0 ? 'hide' : ''}>
                                    <a href="/#info/sensors/1">
                                        <span className="system-left icons-processor-state">
                                            <em className={this.stateToIcon(healthInfo.processor)}></em>
                                        </span>
                                        <span className="stateText">传感器</span>
                                    </a>
                                </li>
                                <li className={healthInfo.disk===0 ? 'hide' : ''}>
                                    <a href="/#info/sensors/1">
                                        <span className="system-left icons-disk-state">
                                            <em className={this.stateToIcon(healthInfo.disk)}></em>
                                        </span>
                                        <span className="stateText">硬盘</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Col>
            );
        }
    }
    render() {
        const {alarmInfo,healthInfo}  = this.props;
        return (
            <div className="dashboard">
                <Row>
                    {this.handleAllHealth(healthInfo)}
                    <Col span={6} className="alert-info">
                        <Row>
                            <Link to="">
                                <Col span={12}>
                                    <em className="icons-state-critical status-icon"></em>
                                    <span>紧急</span>
                                </Col>
                                <Col span={12} className="critical">{alarmInfo.critical}</Col>
                            </Link>
                        </Row>
                        <Row>
                            <Link to="">
                                <Col span={12}>
                                    <em className="icons-state-caution status-icon"></em>
                                    <span>重要</span>
                                </Col>
                                <Col span={12} className="caution">{alarmInfo.major}</Col>
                            </Link>
                        </Row>
                        <Row>
                            <Link to="">
                                <Col span={12}>
                                    <em className="icons-state-normal status-icon"></em>
                                    <span>次要</span>
                                </Col>
                                <Col span={12} className="normal">{alarmInfo.minor}</Col>
                            </Link>
                        </Row>
                        <Row>
                            <Link to="">
                                <Col span={12}>
                                    <em className="icons-state-ok status-icon"></em>
                                    <span>通知</span>
                                </Col>
                                <Col span={12} className="ok">{alarmInfo.ok}</Col>
                            </Link>
                        </Row>

                    </Col>
                    <Col span={6}>
                        {/* 初始化UID状态 */}
                        {this.initUIDStatus()}
                        {/* 初始化服务器电源状态 */}
                        {this.initPowerStatus()}
                        {/* 初始化TPM/TCM状态 */}
                        {this.initTCGStatus()}
                        <Row>
                            <Col span={12}>SD卡卡槽状态</Col>
                            <Col span={12}>关闭</Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        alarmInfo:state.getIn(['dashboard','alarm_info']),
        uidStatus:state.getIn(['common','uidStatus','status']),
        powerStatus:state.getIn(['common','powerStatus']),
        tcgStatus:state.getIn(['dashboard','tcgStatus']),
        healthInfo:state.getIn(['dashboard','health_info']),
    };
};
export default connect(mapStateToProps,null)(Status);
