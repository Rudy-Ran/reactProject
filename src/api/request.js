import {axiosInstance} from './config.js';

//common
export const getUIDStatusRequest = () => {
    return axiosInstance.get('/remote/uid')
}
export const getPowerStatusRequest = () => {
    return axiosInstance.get('/chassis_status')
}

//dashboard
export const getAlarmInfoRequest = () => {
    return axiosInstance.get('/alarm_info')
}
export const getTcgStatusRequest = () => {
    return axiosInstance.get('/tcg_status')
}
export const getFirmwareRequest = () => {
    return axiosInstance.get('/setting/firmware')
}
export const getNTPRequest = () => {
    return axiosInstance.get('/config/get_ntp')
}
export const getSessionRequest = () => {
    return axiosInstance.get('/settings/service-sessions')
}
export const getHealthInfoRequest = () => {
    return axiosInstance.get('/health_info')
}

//network
export const getNetworkRequest = () => {
    return axiosInstance.get('/settings/network')
}
export const getPortModeRequest = () => {
    return axiosInstance.get('/settings/network_portmode')
}
export const postPortModeRequest = (data) => {
    return axiosInstance.post('/settings/network_portmode',data)
}
export const getHostRequest = () => {
    return axiosInstance.get('/network/host')
}
export const getDNSRequest = () => {
    return axiosInstance.get('/network/dns')
}