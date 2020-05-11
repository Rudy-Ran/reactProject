import {fromJS} from 'immutable';
import * as actionTypes from './constants.js';
const initState = fromJS({
    dedicateData:{},
    sharedData:{},
    errors:{},
    networkData:[]
});
export default function (state=initState,action){
    switch(action.type){
        case actionTypes.INIT_NETWORK_DATA:{
            return state.merge({
                sharedData:action.dedicate,
                dedicateData:action.shared,
                networkData:action.network
            });
        }
        case actionTypes.NETWORK_VALUE_CHANGE:{
            if(action.component === 'dedicatePort'){
                return state.merge({
                    dedicateData:state.get('dedicateData').merge(action.data)
                });
            }else {
                return state.merge({
                    sharedData:state.get('sharedData').merge(action.data)
                });
            }
        }
        case actionTypes.NETWORK_ERRORS_CHANGE:{
            return state.merge({
                errors:state.get("errors").merge(action.data)
            });
        }
        default:
            return state;
    }
}