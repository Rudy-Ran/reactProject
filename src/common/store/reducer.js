import {CLEAT_WAIT,SHOW_WAIT,SHOW_MODAL,CHANGE_ERROR_STATUS,CLEAT_ERROR_STATUS,CHANGE_LOGIN_STATE,LOGIN_INPUT_CHANGE,HANDLE_LOGIN_ERROR,INIT_UID_STATUS,INIT_POWER_STATUS} from './actionCreators.js';
import {fromJS} from 'immutable';
const initState = fromJS({
    showWait:true,
    modalVisible:false,
    modalContent:'',
    modalTitle:'',
    isLogin:true,
    username:"",
    password:"",
    uidStatus:null,
    poserStatus:{},
    error:{
        "host":{
            hostError:false
        },
        "dns":{
            "domainError":false,
            "server1Error":false,
            "server2Error":false,
            "server3Error":false,
        },
        "network":{
            "ipv4AddressError":false,
            "ipv4SubnetError":false,
            "ipv4GatewayError":false,
            "ipv6AddressError":false,
            "ipv6GatewayError":false,
            "ipv6PrefixError":false,
            "vlanIDError":false,
            "vlanPriorityError":false
        },
        "login":{
            "loginError":'',
        }
    }
});

export default function (state=initState,action){
    switch(action.type){
        case SHOW_WAIT:{
            return state.set('showWait',true);
        }
        case CLEAT_WAIT:{
            return state.set('showWait',false);
        }
        case SHOW_MODAL:{
            return state.merge({
                modalVisible:true,
                modalContent:action.content,
                modalTitle:action.title
            });
        }
        case INIT_UID_STATUS:{
            return state.set('uidStatus',action.data);
        }
        case INIT_POWER_STATUS:{
            return state.set('powerStatus',action.data);
        }
        case CHANGE_ERROR_STATUS:{
            return state.setIn(["error",action.component,action.key],action.value);
        }
        case CLEAT_ERROR_STATUS:{
            return state.setIn(["error",action.component],initState.getIn(['error',action.component]));
        }
        case CHANGE_LOGIN_STATE:{
            return state.set("isLogin",action.payload.isLogin);
        }
        case LOGIN_INPUT_CHANGE:{
            return state.setIn([action.payload.key],action.payload.value);
        }
        default:
            return state;
    }
}