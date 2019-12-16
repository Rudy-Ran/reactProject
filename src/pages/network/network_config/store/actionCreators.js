import axios from 'axios';
export const INIT_NETWORK_DATA = 'INIT_NETWORK_DATA';
export const NETWORK_VALUE_CHANGE = 'NETWORK_VALUE_CHANGE';
export const NETWORK_ERRORS_CHANGE = 'NETWORK_ERRORS_CHANGE';
import {dialog} from '@/utils/h3c.dialog.js';
import {clearWait,showWait,showModal} from '@/common/store/actionCreators.js'; 
export const JDUGE_DISABLE_STATUS = 'JDUGE_DISABLE_STATUS';
function initNetWorkData(data){
    return{
        type:INIT_NETWORK_DATA,
        eth0_data:data[0],
        eth1_data:data[1],
        init_data:data
    };
}
export function networkValueChange(component,value){
    return{
        type:NETWORK_VALUE_CHANGE,
        component,
        value
    };
}
export function handleErrorChange(value){
    return{
        type:NETWORK_ERRORS_CHANGE,
        value
    };
}
export function jdugeDisableStatus(){
    return {
        type:JDUGE_DISABLE_STATUS
    };
}
export function getNetWorkData(){
    return async(dispatch)=>{
        await axios.get('http://settings/network').then(
            function(res){
                //TODO:这个地方应该优化 目前没用cc判断
                dispatch(initNetWorkData(res.data));
                dispatch(jdugeDisableStatus());
            }).catch(function(error){
            dialog.notify('获取网络配置失败');
        });
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