import {fromJS} from 'immutable';
import * as actionTypes from './constants.js';
const initState = fromJS({
    health_info: {},
    alarm_info: {},
    tcgStatus:{},
    host:{},
    networkData:[],
    firmware:[],
    ntp:{},
    seesionTableData:[],
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
            return state.set('host',action.data);
        }
        case actionTypes.INIT_NET_DATA:{
            return state.set('networkData',action.data);
        }
        case actionTypes.INIT_FIRMWARE_DATA :{
            return state.set('firmware',action.data)
        }
        case actionTypes.INIT_NTP_DATA:{
            return state.set('ntp',action.data);
        }
        case actionTypes.INIT_SESSION_DATA:{
            return state.set('seesionTableData',action.data);
        }
        default:
            return state;
    }
}
