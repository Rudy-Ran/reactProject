import axios from 'axios';
export const CLEAT_WAIT = 'CLEAT_WAIT';
export const SHOW_WAIT = 'SHOW_WAIT';
export const SHOW_MODAL = 'SHOW_MODAL';
export const CHANGE_ERROR_STATUS = 'CHANGE_ERROR_STATUS';
export const CLEAT_ERROR_STATUS = 'CLEAT_ERROR_STATUS';
export const CHANGE_LOGIN_STATE = 'CHANGE_LOGIN_STATE';
export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const INIT_UID_STATUS = 'INIT_UID_STATUS';
export const INIT_POWER_STATUS = 'INIT_POWER_STATUS';
import {getUIDStatusRequest,getPowerStatusRequest} from '@/api/request.js'
export function clearWait(){
    return{
        type:CLEAT_WAIT,
    };
}
export function showWait(){
    return{
        type:SHOW_WAIT
    };
}
export function showModal(content){
    return{
        type:SHOW_MODAL,
        content
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
export function changeErrorStatus(component,key,value){
    return {
        type:CHANGE_ERROR_STATUS,
        component,
        key,
        value
    };
}
export function clearErrorStatus(component){
    return {
        type:CLEAT_ERROR_STATUS,
        component
    };
}
export function changeLoginStatus(isLogin){
    return{
        type:CHANGE_LOGIN_STATE,
        payload:{
            isLogin
        }
    };
}
export function loginInputChange(key,value){
    return{
        type:LOGIN_INPUT_CHANGE,
        payload:{
            key,
            value
        }
    };
}
export function getUIDStatus(){
    return async(dispatch)=>{
        getUIDStatusRequest().then(data=>{
            dispatch(initUidStatus(data))
        }).catch(()=>{
            console.log('getUIDStatusFail !')
        })
    };
}
export function getPowerStatus(){
    return async(dispatch)=>{
        getPowerStatusRequest().then(data=>{
            dispatch(initPowerStatus(data))
        }).catch(()=>{
            console.log('getPowerStatusFail !')
        })
    };
}

