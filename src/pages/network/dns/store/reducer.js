import {SAVE_HOST_NAME,UPDATE_DNS,INIT_DNS_DATA,DNS_VALUE_CHANGE,HOST_VALUE_CHANGE,JDUGE_DISABLE_STATUS,CHANGE_ERROR_STATUS,CLEAT_ERROR_STATUS,INIT_HOST_DATA} from './actionCreators.js';
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
        case SAVE_HOST_NAME:{
            return state.set('hostData',action.data);
        }
        case HOST_VALUE_CHANGE:{
            return state.setIn(["hostData",action.key],action.value);
        }
        case DNS_VALUE_CHANGE:{
            return state.setIn(["dnsData",action.key],action.value,);
        }
        case JDUGE_DISABLE_STATUS:{
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
        case UPDATE_DNS:{
            return{
                ...state,
                dnsData:action.payload.value
            };
        }
        case INIT_DNS_DATA:{
            return state.set('dnsData',action.data);
        }
        case INIT_HOST_DATA:{
            return state.set('hostData',action.data);
        }
        default:
            return state;
    }
}