import {getPortModeRequest,postPortModeRequest} from '@/api/request.js';
import * as actionTypes from './constants.js';
import {clearWait,showWait,showModal} from '@/common/store/actionCreators.js';
import {dialog} from '@/utils/h3c.dialog.js';
import {Map} from 'immutable';

function getPortModeData(data) {
    return {
        type: actionTypes.GET_PORT_MODE,
        data: Map(data)
    };
}
export function valueChange(key, value) {
    return {
        type: actionTypes.VALUE_CHANGE_DATA,
        key,
        value
    };
}
export function getPortMode() {
    return async (dispatch) => {
        dispatch(showWait());
        await getPortModeRequest().then(data => {
            dispatch(clearWait());
            dispatch(getPortModeData(data));
        }).catch(() => {
            // dialog.notify('获取网络配置失败');
        })
    };
}
export function saveNetPortCfg(params) {
    return async (dispatch) => {
        dispatch(showWait());
        await postPortModeRequest().then(res => {
            dispatch(clearWait());
            switch(res.cc){
                case 0:
                    dialog.tip('请稍等片刻，然后打开一个新的浏览器会话查看是否成功')
                    break;
                case 2:
                    dialog.notify('VLAN处于开启的情况下，不支持bonding模式的切换')
                    break;
                case 3:
                    dialog.notify('网口自适应和端口自适应不能同时开启')
                    break;
                default:
                    break; 
            }
        }).catch(() => {
            dialog.notify('获取网络配置失败');
        })
    };
}