import * as actionTypes from './constants.js';
import {fromJS} from 'immutable';
const initState = fromJS({
    hostData: {},
    dnsData: {},
    showModal:false,    
    showModalTips:false,
    disableInput:false,
    disableRadio:false,
});
export default function (state=initState, action) {
    switch (action.type) {
        case actionTypes.SAVE_HOST_NAME:{
            return state.set('hostData',action.data);
        }
        case actionTypes.HOST_VALUE_CHANGE:{
            return state.setIn(["hostData",action.key],action.value);
        }
        case actionTypes.DNS_VALUE_CHANGE:{
            return state.setIn(["dnsData",action.key],action.value,);
        }
        case actionTypes.JDUGE_DISABLE_STATUS:{
            if(state.getIn(['dnsData','dns_status']) === 0){
                return state.merge({
                    disableInput: true,
                    disableRadio: true  
                });
            }else if(state.getIn(['dnsData','dns_status']) === 1 && state.getIn(['dnsData','dns_manual']) !== 0){
                return state.merge({
                    disableInput: true,
                    disableRadio: false  
                });
            }else {
                return state.merge({
                    disableInput: false,
                    disableRadio: false  
                });
            }
        }
        case actionTypes.UPDATE_DNS:{
            return{
                ...state,
                dnsData:action.payload.value
            };
        }
        case actionTypes.INIT_DNS_DATA:{
            return state.set('dnsData',action.data);
        }
        case actionTypes.INIT_HOST_DATA:{
            return state.set('hostData',action.data);
        }
        default:
            return state;
    }
}