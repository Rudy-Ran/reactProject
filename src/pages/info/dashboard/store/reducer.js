import {fromJS} from 'immutable';
import * as actionTypes from './constants.js';
const initState = fromJS({
    health_info: {},
    alarm_info: {},
    tcgStatus:{},
    hostName:'',
    networkData:[],
    hdm_info:'N/A',
    bios_info:'N/A',
    cpld_info:'N/A',
    hdmTime:'N/A',
    seesionTableData:{},
    columns: [
        {
            title: '会话ID',
            dataIndex: 'session_id',
            key: 'session_id',
        },
        {
            title: '会话类型',
            dataIndex: 'session_type',
            key: 'session_type',
        },
        {
            title: '用户编号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '用户名',
            dataIndex: 'user_name',
            key: 'user_name',
        },
        {
            title: '客户端IP',
            dataIndex: 'client_ip',
            key: 'client_ip',
        },
        {
            title: '权限',
            dataIndex: 'user_privilege',
            key: 'Uuser_privilege',
        },
    ]
});
    //转换时间戳
function changeTimestamp(Timestamp) {
    var time = new Date(Timestamp * 1000);
    var year = time.getUTCFullYear();
    var month = time.getUTCMonth() + 1;
    var date = time.getUTCDate();
    var hours = time.getUTCHours();
    var mimutes = time.getUTCMinutes();
    var seconds = time.getUTCSeconds();
    if ((!isNaN(month)) && (!isNaN(date)) && 　(!isNaN(hours)) && (!isNaN(mimutes)) && 　(!isNaN(seconds))) {
        month = ((month < 10) ? "0" : "") + month;
        date = ((date < 10) ? "0" : "") + date;
        hours = ((hours < 10) ? "0" : "") + hours;
        mimutes = ((mimutes < 10) ? "0" : "") + mimutes;
        seconds = ((seconds < 10) ? "0" : "") + seconds;
    }
    var buildTime = year + "-" + month + "-" + date + " " + hours + ":" + mimutes + ":" + seconds;
    return buildTime;
}
export default function(state = initState, action) {
    switch (action.type) {
        case actionTypes.INIT_HEALTH_INFO:{
            return state.set('health_info',action.data);
        }
        case actionTypes.INIT_ALARM_INFO: {
            return state.set('alarm_info',action.data);
        }
        case actionTypes.INIT_TCG_STATUS:{
            return state.set('tcgStatus',action.data);
        }
        case actionTypes.INIT_HOST_NAME:{
            return state.set('hostName',action.data);
        }
        case actionTypes.INIT_NET_DATA:{
            return state.set('networkData',action.data);
        }
        case actionTypes.INIT_FIRMWARE_DATA :{
            return state.merge({
                'hdm_info':action.hdm_info,
                'bios_info':action.bios_info,
                'cpld_info':action.cpld_info
            });
        }
        case actionTypes.INIT_NTP_DATA:{
            return state.set('hdmTime',changeTimestamp(action.time));
        }
        case actionTypes.INIT_SESSION_DATA:{
            return state.set('seesionTableData',action.data);
        }
        default:
            return state;
    }
}
