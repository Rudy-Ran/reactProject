import {fromJS} from 'immutable';
import {INIT_NETWORK_DATA,NETWORK_VALUE_CHANGE,JDUGE_DISABLE_STATUS} from './actionCreators.js';
const initState = fromJS({
    dedicatePort:{},
    sharedPort:{},
    ipv4InputDisable:false,
    ipv6InputDisable:false,
    vlanInputDisable:false
});
export default function (state=initState,action){
    switch(action.type){
        case INIT_NETWORK_DATA:{
            return state.merge({
                sharedPort:action.eth0_data,
                dedicatePort:action.eth1_data
            });
        }
        case JDUGE_DISABLE_STATUS:{
            let data  = state.get('dedicatePort');
            let ipv4InputDisable = false;
            let ipv6InputDisable = false;
            let vlanInputDisable = false;
            if(data.ipv4_enable === 0 || (data.ipv4_dhcp_enable ===1 && data.ipv4_enable)){
                ipv4InputDisable = true;
            }
            if(data.ipv6_enable === 0 || (data.ipv6_dhcp_enable ===1 && data.ipv6_enable)){
                ipv6InputDisable = true;
            }
            if(data.vlan_enable === 0){
                vlanInputDisable = true;
            }
            return state.merge({
                "ipv4InputDisable":ipv4InputDisable,
                "ipv6InputDisable":ipv6InputDisable,
                "vlanInputDisable":vlanInputDisable
            });
        }
        case NETWORK_VALUE_CHANGE:{
            return state.setIn([action.component,action.key],action.value);
        }
        default:
            return state;
    }
}