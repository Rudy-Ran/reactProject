import {fromJS,Map} from 'immutable';
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
        data:Map(data)
    };
}
function initTCGStatus(data){
    return {
        type:actionTypes.INIT_TCG_STATUS,
        data:Map(data)
    };
}
function initHostName(data){
    return {
        type:actionTypes.INIT_HOST_NAME,
        data:Map(data)
    };
}
function initNetworkData(data){
    return {
        type:actionTypes.INIT_NET_DATA,
        data:fromJS(data)
    };
}
function initFirmwareData(data){
    return {
        type:actionTypes.INIT_FIRMWARE_DATA,
        data:fromJS(data)
    };
}
function initNTP(data){
    return {
        type:actionTypes.INIT_NTP_DATA,
        data:Map(data)
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
        data:fromJS(data)
    };
}
function initHealthInfo(data){
    return{
        type:actionTypes.INIT_HEALTH_INFO,
        data:Map(data)
    };
}
export function getDashboardData(){
    return async (dispatch)=>{
        await getAlarmInfoRequest().then(data=>{
            dispatch(initAlarmInfo(data))
        }).catch(()=>{
            console.log('getAlarmInfoFail !')
        })
        await getTcgStatusRequest().then(data=>{
            dispatch(initTCGStatus(data))
        }).catch(()=>{
            console.log('getTcgStatusFail !')
        })
        await getNetworkRequest().then(data=>{
            dispatch(initNetworkData(data))
        }).catch(()=>{
            console.log('getNetworkFail !')
        })
        await getHostRequest().then(data=>{
            dispatch(initHostName(data))
        }).catch((err)=>{
            console.log('getHostFail !')
        })
        await getFirmwareRequest().then(data=>{
            dispatch(initFirmwareData(data))
        }).catch(()=>{
            console.log('getFirmwareFail !')
        })
        await getNTPRequest().then(data=>{
            dispatch(initNTP(data))
        }).catch(()=>{
            console.log('getNTPFail !')
        })
        await getSessionRequest().then(data=>{
            dispatch(initSession(data))
        }).catch(()=>{
            console.log('getSessionFail !')
        })
        await getHealthInfoRequest().then(data=>{
            dispatch(initHealthInfo(data))
        }).catch(()=>{
            console.log('getHealthInfoFail !')
        })
    };
} 

