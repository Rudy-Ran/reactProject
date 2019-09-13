import axios from 'axios';
import {clearWait,showWait,showModal} from '@/common/store/actionCreators.js'; 
import {dialog} from '@/utils/h3c.dialog.js';
export const  GET_BOND_DATA = 'GET_BOND_DATA';
export const VALUE_CHANGE_DATA = 'VALUE_CHANGE_DATA';
export const GET_NET_PORT_DATA = 'GET_NET_PORT_DATA';
function getBondData(data){
    return{
        type:GET_BOND_DATA,
        data
    };
}
function getNetPortData(data){
    return{
        type:GET_NET_PORT_DATA,
        data
    };
}
export function valueChange(key,value){
    return {
        type:VALUE_CHANGE_DATA,
        key,
        value
    };
}
export function getData(){
    return async (dispatch)=>{
        dispatch(showWait());
        const res1 = await axios.get('http://settings/network-bond');
        const res2 = await axios.get('http://settings/network_dedicate_first');
        if(res1.status === 200 && res2.status === 200){
            dispatch(clearWait());
            dispatch(getBondData(res1.data));
            dispatch(getNetPortData(res2.data));
        }
    };
}
export function saveBondCfg(params){
    return async (dispatch)=>{
        await axios.post('http://settings/network-bond',params).then(
            function(res){
                if(res.data.cc===2){
                    dialog.notify('error','VLAN处于开启状态下不支持Bonding模式的切换。');
                }else if(res.data.cc === 209){
                    dialog.notify('error','正在进行固件更新中，该操作不可用');
                }else {
                    dispatch(showModal('请稍等片刻，然后打开一个新的浏览器会话查看Bonding 配置是否配置成功。'));
                }
            }
        ).catch(function(error){
            dispatch(showModal('请稍等片刻，然后打开一个新的浏览器会话查看Bonding 配置是否配置成功。'));
        });
    };
} 
export function saveNetPortCfg(params){
    return async (dispatch)=>{
        await axios.post('http://settings/network_dedicate_first',params).then(
            function(res){
                if(res.data.cc===2){
                    dialog.notify('error','网口自适应模式和端口自适应模式不能同时开启');
                }else if(res.data.cc === 209){
                    dialog.notify('error','正在进行固件更新中，该操作不可用');
                }else {
                    dispatch(showModal('请稍等片刻，然后打开一个新的浏览器会话查看网口自适应配置是否配置成功。'));
                }
            }
        ).catch(function(error){
            dispatch(showModal('请稍等片刻，然后打开一个新的浏览器会话查看网口自适应配置是否配置成功。'));
        });
    };
} 
