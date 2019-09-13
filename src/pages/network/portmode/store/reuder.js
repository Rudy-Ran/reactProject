import {GET_BOND_DATA,VALUE_CHANGE_DATA,GET_NET_PORT_DATA,SHOW_MODAL} from './actionCreators.js';
import {fromJS} from 'immutable';
const initState = fromJS({
    showWait:true,
    bond_enable:0,
    dedicate_first_enable:0,
    init_bond_enable:0,
    init_dedicate_first_enable:0,

    // modalInfo:{
    //     visible:false,
    //     content:''
    // }
});

export default function (state=initState,action){
    switch(action.type){
        case GET_BOND_DATA:{
            return state.merge({
                bond_enable:action.data.bond_enable,
                init_bond_enable:action.data.bond_enable
            });
        }
        case GET_NET_PORT_DATA:{
            return state.merge({
                dedicate_first_enable:action.data.dedicate_first_enable,
                init_dedicate_first_enable:action.data.dedicate_first_enable
            });
        }
        case VALUE_CHANGE_DATA:{
            if(action.key === 'bond_enable'){
                return state.set('bond_enable',action.value);
            }else {
                return state.set('dedicate_first_enable',action.value);
            }
        }
        default:
            return state;
    }
}