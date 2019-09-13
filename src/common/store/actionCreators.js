export const CLEAT_WAIT = 'CLEAT_WAIT';
export const SHOW_WAIT = 'SHOW_WAIT';
export const SHOW_MODAL = 'SHOW_MODAL';
export const CHANGE_ERROR_STATUS = 'CHANGE_ERROR_STATUS';
export const CLEAT_ERROR_STATUS = 'CLEAT_ERROR_STATUS';
export const CHANGE_LOGIN_STATE = 'CHANGE_LOGIN_STATE';
export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
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

