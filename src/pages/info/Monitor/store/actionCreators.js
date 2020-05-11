import axios from 'axios';
export const GET_CPU_DATA = 'GET_CPU_DATA';
export const GET_MEM_DATA = 'GET_MEM_DATA';
//TODO:cc值 这里未处理

function initCPUData(data){
    return {
        type:GET_CPU_DATA,
        data
    };
}
function initMemData(data){
    return {
        type:GET_MEM_DATA,
        data
    };
}
export function getCPUCurveData(){
    return async (dispatch)=>{
        const res = await axios.get('http://system/curve_cpu_data');
        if(res.status === 200){
            dispatch(initCPUData(res.data));
        }
    };
}

export function getMemCurveData(){
    return async (dispatch)=>{
        const res = await axios.get('http://system/curve_mem_data');
        if(res.status === 200){
            dispatch(initMemData(res.data));
        }
    };
}