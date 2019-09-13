import axios from 'axios';
import {fromJS} from 'immutable';
export const INIT_ALARM_INFO = 'INIT_ALARM_INFO';
export const INIT_UID_STATUS = 'INIT_UID_STATUS';
export const INIT_POWER_STATUS = 'INIT_POWER_STATUS';
export const INIT_TCG_STATUS = 'INIT_TCG_STATUS';
export const INIT_HOST_NAME = 'INIT_HOST_NAME';
export const INIT_NET_DATA = 'INIT_NET_DATA';
export const INIT_FIRMWARE_DATA = 'INIT_FIRMWARE_DATA';
export const INIT_NTP_DATA = 'INIT_NTP_DATA';
export const INIT_SESSION_DATA = 'INIT_SESSION_DATA';
export const INIT_HEALTH_INFO = 'INIT_HEALTH_INFO';
function initAlarmInfo(data){
    return{
        type:INIT_ALARM_INFO,
        data
    };
}
function initUidStatus(data){
    return {
        type:INIT_UID_STATUS,
        data
    };
}
function initPowerStatus(data){
    return {
        type:INIT_POWER_STATUS,
        data
    };
}
function initTCGStatus(data){
    return {
        type:INIT_TCG_STATUS,
        data
    };
}
function initHostName(data){
    return {
        type:INIT_HOST_NAME,
        data
    };
}
function initNetworkData(data){
    return {
        type:INIT_NET_DATA,
        data
    };
}
function initFirmwareData(data){
    return {
        type:INIT_FIRMWARE_DATA,
        hdm_info:data[0].bmc_revision,
        bios_info:data[0].bios_revision,
        cpld_info:data[0].cpld_revision
    };
}
function initNTP(data){
    return {
        type:INIT_NTP_DATA,
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
        type:INIT_SESSION_DATA,
        data
    };
}
function initHealthInfo(data){
    return{
        type:INIT_HEALTH_INFO,
        data
    };
}
export function getData(){

    return async (dispatch)=>{
        const res1 = await axios.get('http://alarm_info');
        if(res1.status === 200){
            dispatch(initAlarmInfo(res1.data));
        }
        const res2 = await axios.get('http://remote/uid');
        if(res2.status === 200){
            dispatch(initUidStatus(res2.data.status));
        }
        const res3 = await axios.get('http://chassis_status');
        if(res3.status === 200){
            dispatch(initPowerStatus(res3.data.power_status));
        }
        const res4 = await axios.get('http://tcg_status');
        if(res4.status === 200){
            dispatch(initTCGStatus(res4.data));
        }
        const res5 = await axios.get('http://network/host');
        if(res2.status === 200){
            dispatch(initHostName(res5.data.host_name));
        }
        const res6  =await axios.get('http://settings/network');
        if(res6.status === 200){
            dispatch(initNetworkData(res6.data));
        }
        const res7 = await axios.get('http://setting/firmware');
        if(res7.status === 200){
            dispatch(initFirmwareData(res7.data));
        }
        const res8 = await axios.get('http://config/get_ntp');
        if(res8.status === 200){
            dispatch(initNTP(res8.data));
        }
        const res9 = await axios.get('http://settings/service-sessions');
        if(res9.status === 200){
            dispatch(initSession(res9.data));
        }
        const res10 = await axios.get('http://health_info');
        if(res10.status === 200){
            dispatch(initHealthInfo(res10.data));
        }
    };
} 

