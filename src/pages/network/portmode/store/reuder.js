import * as actionTypes from './constants.js';
import {fromJS} from 'immutable';
const initState = fromJS({
    showWait:true,
    portMode:{},
    initData:{}
});

export default function (state=initState,action){
    switch(action.type){
        case actionTypes.GET_PORT_MODE:{
            return state.merge({
                portMode:action.data,
                initData:action.data,
            });
        }
        case actionTypes.VALUE_CHANGE_DATA:{
            return state.setIn(['portMode','port_mode'],action.value);
        }
        default:
            return state;
    }
}