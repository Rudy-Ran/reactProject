import {fromJS} from 'immutable';
import {INIT_NETWORK_DATA,NETWORK_VALUE_CHANGE,NETWORK_ERRORS_CHANGE} from './actionCreators.js';
const initState = fromJS({
    dedicatePort:{},
    sharedPort:{},
    errors:{},
    initNetworkData:{}
});
export default function (state=initState,action){
    switch(action.type){
        case INIT_NETWORK_DATA:{
            return state.merge({
                sharedPort:fromJS(action.eth0_data),
                dedicatePort:fromJS(action.eth1_data),
                initNetworkData:action.init_data
            });
        }
        case NETWORK_VALUE_CHANGE:{
            if(action.component === 'dedicatePort'){
                return state.merge({
                    dedicatePort:fromJS(state.get(action.component)).merge(fromJS(action.value))
                });
            }else {
                return state.merge({
                    sharedPort:fromJS(state.get(action.component)).merge(fromJS(action.value))
                });
            }
        }
        case NETWORK_ERRORS_CHANGE:{
            return state.merge({
                errors:state.get("errors").merge(fromJS(action.value))
            });
        }
        default:
            return state;
    }
}