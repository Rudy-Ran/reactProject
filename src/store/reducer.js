import {combineReducers} from 'redux-immutable';
import commonReducer from '../common/store/reducer.js';
import dnsReducer from '../pages/network/dns/store/reducer.js';
import dashBoardReducer from '../pages/info/dashboard/store/reducer.js';
import hardwareReducer from '../pages/info/hardware/store/reducer.js';
import monitorReducer from '../pages/info/Monitor/store/reducer.js';
import portModeReducer from '../pages/network/portmode/store/reuder.js';
import networkReducer from '../pages/network/network_config/store/reducer.js';
export default combineReducers({
    common:commonReducer,
    dns:dnsReducer,
    dashboard:dashBoardReducer,
    hardware:hardwareReducer,
    monitor:monitorReducer,
    portmode:portModeReducer,
    network:networkReducer
});