import {getHostRequest,getDNSRequest} from '@/api/request.js';
import * as actionTypes from './constants.js';
import {clearWait,showWait} from '@/common/store/actionCreators.js'; 
import { fromJS } from 'immutable';
export function hostValueChange(key,value){
    return {
        type:actionTypes.HOST_VALUE_CHANGE,
        key,
        value
    };
}
export function jdugeDisableStatus(){
    return {
        type:actionTypes.JDUGE_DISABLE_STATUS,
    };
}
export function dnsValueChange(key,value){
    return {
        type:actionTypes.DNS_VALUE_CHANGE,
        key,
        value
    };
}
export function updateDNS(value){
    return {
        type:actionTypes.UPDATE_DNS,
        payload:{
            value
        }
    };
}
export function isShowModal(value){
    return{
        type:actionTypes.SHOW_MODAL,
        payload:{
            value
        }
    };
}
export function isShowModalTips(value){
    return{
        type:actionTypes.SHOW_MODAL_TIPS,
        payload:{
            value
        }
    };
}
function initDNSData(data){
    return{
        type:actionTypes.INIT_DNS_DATA,
        data:fromJS(data)
    }
}
function initHostData(data){
    return{
        type:actionTypes.INIT_HOST_DATA,
        data:fromJS(data)
    }
}
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
        await getHostRequest().then(data=>{
            dispatch(initHostData(data))
        }).catch((err)=>{
            console.log(err)
        })
        await getDNSRequest().then(data=>{
            dispatch(initDNSData())
        }).catch(()=>{
            console.log('getDNSRequest Fail')
        })
        dispatch(clearWait());
        // dispatch(jdugeDisableStatus());
    };
} 