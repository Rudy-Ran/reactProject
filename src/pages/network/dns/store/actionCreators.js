import axios from 'axios';
export const SAVE_HOST_NAME = 'SAVE_HOST_NAME';
export const UPDATE_DNS = 'SAVE_DNS';
export const SHOW_MODAL = 'SHOW_MODAL';
export const SHOW_MODAL_TIPS = 'SHOW_MODAL_TIPS';
export const INIT_DNS_DATA = 'INIT_DNS_DATA';
export const INIT_HOST_DATA = 'INIT_HOST_DATA';
export const HOST_VALUE_CHANGE = 'HOST_VALUE_CHANGE';
export const DNS_VALUE_CHANGE = 'DNS_VALUE_CHANGE';
export const JDUGE_DISABLE_STATUS = 'JDUGE_DISABLE_STATUS';
export const CHANGE_ERROR_STATUS = 'CHANGE_ERROR_STATUS';
export const CLEAT_ERROR_STATUS = 'CLEAT_ERROR_STATUS';
import {clearWait,showWait} from '@/common/store/actionCreators.js'; 
import { fromJS } from 'immutable';
export function hostValueChange(key,value){
    return {
        type:HOST_VALUE_CHANGE,
        key,
        value
    };
}
export function jdugeDisableStatus(){
    return {
        type:JDUGE_DISABLE_STATUS,
    };
}
export function dnsValueChange(key,value){
    return {
        type:DNS_VALUE_CHANGE,
        key,
        value
    };
}
export function updateDNS(value){
    return {
        type:UPDATE_DNS,
        payload:{
            value
        }
    };
}
export function isShowModal(value){
    return{
        type:SHOW_MODAL,
        payload:{
            value
        }
    };
}
export function isShowModalTips(value){
    return{
        type:SHOW_MODAL_TIPS,
        payload:{
            value
        }
    };
}
const initDNSData = (data) => ({
    type:INIT_DNS_DATA,
    data:fromJS(data)
});
const initHostData =(data) => ({
    type:INIT_HOST_DATA,
    data:fromJS(data)
});
export function saveHostName(value){
    axios.post('http://network/host',
        value
    ).then(function (response) {
    }).catch(function (error) {
    });
}
export function getData(){
    return async (dispatch)=>{
        dispatch(showWait());
        const res1 = await axios.get('http://network/dns');
        const res2 = await axios.get('http://network/host');
        if(res1.status === 200 && res2.status === 200){
            dispatch(clearWait());
            dispatch(initDNSData(res1.data));
            dispatch(initHostData(res2.data));
            dispatch(jdugeDisableStatus());
        }
    };
} 