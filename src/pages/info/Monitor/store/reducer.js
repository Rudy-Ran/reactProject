import {GET_CPU_DATA,GET_MEM_DATA} from './actionCreators.js';
import {fromJS} from 'immutable';
const initData = fromJS({
    cpu_data:{},
    men_ata:{},
    fan_data:{},
    alias:""
});
export default function(state = initData,action){
    switch(action.type){
        case GET_CPU_DATA:{
            return state.merge({
                cpu_data: action.data,
                alias: 'CPU使用率'  
            });
        }
        case GET_MEM_DATA:{
            return state.merge({
                mem_data: action.data,
                alias: 'MEM使用率'  
            });
        }
        default:
            return state;
    }
}