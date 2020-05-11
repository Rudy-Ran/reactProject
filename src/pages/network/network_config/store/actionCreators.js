import {
    getNetworkRequest,
} from '@/api/request.js';
import {fromJS,Map} from 'immutable';
import {dialog} from '@/utils/h3c.dialog.js';
import {clearWait,showWait,showModal} from '@/common/store/actionCreators.js';
import * as actionTypes from './constants.js';
function initNetWorkData(data){
    return{
        type:actionTypes.INIT_NETWORK_DATA,
        dedicate:Map(data[0]),
        shared:Map(data[1]),
        network:fromJS(data)
    };
}
export function networkValueChange(component,data){
    return{
        type:actionTypes.NETWORK_VALUE_CHANGE,
        component,
        data:fromJS(data)
    };
}
export function handleErrorChange(data){
    return{
        type:actionTypes.NETWORK_ERRORS_CHANGE,
        data:fromJS(data)
    };
}
export function jdugeDisableStatus(){
    return {
        type:actionTypes.JDUGE_DISABLE_STATUS
    };
}
export function getNetWorkData(){
    return async(dispatch)=>{
        await getNetworkRequest().then(data=>{
            dispatch(initNetWorkData(data));
            dispatch(jdugeDisableStatus());
        }).catch(()=>{
            // dialog.notify('获取网络配置失败');
        })
    };
}
export function saveDedicatePortCfg(data){
    return async (dispatch)=>{
        await axios.post('http://settings/network',data).then(
            function(res){
                switch(res.data.cc){
                    case 0:
                        dispatch(showModal('专用网口配置已成功。配置正在生效，请稍等片刻，然后打开一个新的浏览器会话连接到该设备。'));
                        break;
                    case 209:
                        dialog.notify('error','正在进行固件更新中，该操作不可用');
                        break;
                    default:
                        dispatch(showModal('专用网口配置已成功。配置正在生效，请稍等片刻，然后打开一个新的浏览器会话连接到该设备。'));
                        break;
                }
            }
        ).catch(function(error){
            dispatch(showModal('专用网口配置已成功。配置正在生效，请稍等片刻，然后打开一个新的浏览器会话连接到该设备。'));
        });
    };
} 