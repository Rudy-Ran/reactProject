import axios from 'axios';
import * as actionTypes from './constants.js';
import {getAlarmInfoRequest,
        getTcgStatusRequest,
        getHostRequest,
        getNetworkRequest,
        getFirmwareRequest,
        getNTPRequest,
        getSessionRequest,
        getHealthInfoRequest} from '@/api/request.js'
function initAlarmInfo(data){
    return{
        type:actionTypes.INIT_ALARM_INFO,
        data
    };
}
function initTCGStatus(data){
    return {
        type:actionTypes.INIT_TCG_STATUS,
        data
    };
}
function initHostName(data){
    console.log(data)
    return {
        type:actionTypes.INIT_HOST_NAME,
        data
    };
}
function initNetworkData(data){
    return {
        type:actionTypes.INIT_NET_DATA,
        data
    };
}
function initFirmwareData(data){
    return {
        type:actionTypes.INIT_FIRMWARE_DATA,
        hdm_info:data[0].bmc_revision,
        bios_info:data[0].bios_revision,
        cpld_info:data[0].cpld_revision
    };
}
function initNTP(data){
    return {
        type:actionTypes.INIT_NTP_DATA,
        time:data.timestamp
    };
}
function initSession(data){
    for(let i in data){
        data[i].key = i;
        switch (data[i].session_type){
            case 0:
                data[i].session_type = 'Web HTTP'; 
                break;
            case 1:
                data[i].session_type = 'Web HTTPS';
                break;
            case 2:
                data[i].session_type = 'Telnet';
                break;
            case 3:
                data[i].session_type = 'SSH';
                break;
            case 4:
                data[i].session_type = 'Web';
                break;
            case 5:
                data[i].session_type = 'KVM';
                break;
            case 6:
                data[i].session_type = 'VMedia';
                break;
            case 7:
                data[i].session_type = 'VMedia CD';
                break;
            case 8:
                data[i].session_type = 'VMedia FD';
                break;
            case 9:
                data[i].session_type = 'VMedia HD';
                break;
            case 10:
                data[i].session_type = 'VMedia Local CD';
                break;
            case 11:
                data[i].session_type = 'VMedia Local FD';
                break;
            case 12:
                data[i].session_type = 'VMedia Local HD';
                break;
            case 13:
                data[i].session_type = 'Serial';
                break;
            case 14:
                data[i].session_type = 'Remote XDP';
                break;
            default:
                break;
        }
        switch(data[i].user_privilege){
            case 0:
                data[i].user_privilege = 'Reserved';
                break;
            case 1:
                data[i].user_privilege = 'Callback';
                break;
            case 2:
                data[i].user_privilege = 'User';
                break;
            case 3:
                data[i].user_privilege = 'Operator';
                break;
            case 4:
                data[i].user_privilege = 'Administrator';
                break;
            case 5:
                data[i].user_privilege = 'OEM';
                break;
            default:
                break;
        }
    }
    return {
        type:actionTypes.INIT_SESSION_DATA,
        data
    };
}
function initHealthInfo(data){
    return{
        type:actionTypes.INIT_HEALTH_INFO,
        data
    };
}
export function getDashboardData(){

    return async (dispatch)=>{
        getAlarmInfoRequest().then(data=>{
            dispatch(initAlarmInfo(data))
        }).catch(()=>{
            console.log('getAlarmInfoFail !')
        })
        getTcgStatusRequest().then(data=>{
            dispatch(initTCGStatus(data))
        }).catch(()=>{
            console.log('getTcgStatusFail !')
        })
        getNetworkRequest().then(data=>{
            dispatch(initNetworkData(data))
        }).catch(()=>{
            console.log('getNetworkFail !')
        })
        getHostRequest().then(data=>{
            dispatch(initHostName(data.host_name))
        }).catch((err)=>{
            console.log(err)
            console.log('getHostFail !')
        })
        getFirmwareRequest().then(data=>{
            dispatch(initFirmwareData(data))
        }).catch(()=>{
            console.log('getFirmwareFail !')
        })
        getNTPRequest().then(data=>{
            dispatch(initNTP(data))
        }).catch(()=>{
            console.log('getNTPFail !')
        })
        getSessionRequest().then(data=>{
            dispatch(initSession(data))
        }).catch(()=>{
            console.log('getSessionFail !')
        })
        getHealthInfoRequest().then(data=>{
            dispatch(initHealthInfo(data))
        }).catch(()=>{
            console.log('getHealthInfoFail !')
        })
    };
} 

