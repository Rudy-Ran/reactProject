import {createStore,applyMiddleware} from 'redux';
import {combineReducers} from 'redux-immutable';
import thunk from 'redux-thunk';
import commonReducer from './common/store/reducer.js';
import dnsReducer from './pages/network/dns/store/reducer.js';
import dashBoardReducer from './pages/info/dashboard/store/reducer.js';
import hardwareReducer from './pages/info/hardware/store/reducer.js';
import monitorReducer from './pages/info/Monitor/store/reducer.js';
import portModeReducer from './pages/network/portmode/store/reuder.js';
import networkReducer from './pages/network/network_config/store/reducer.js';
const allReducers = {
    common:commonReducer,
    dns:dnsReducer,
    dashboard:dashBoardReducer,
    hardware:hardwareReducer,
    monitor:monitorReducer,
    portmode:portModeReducer,
    network:networkReducer
};
// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers(allReducers);
const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));
export default store;
