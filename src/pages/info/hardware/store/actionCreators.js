import axios from 'axios';
export const INIT_CPUS_DATA  = 'INIT_CPUS_DATA';
export const INIT_PROCSEEORS_DATA = 'INIT_PROCSEEORS_DATA';
export const INIT_FANS_DATA = 'INIT_FANS_DATA';
export const INIT_POWER_DATA = 'INIT_POWER_DATA';
//处理器是否支持64位
function supportTostring(support) {
    if (support === 1) {
        return '不支持';
    } else {
        return '支持';
    }
}
//转化处理器index为名字
function processNameToString(index){
    var prcIndex;
    prcIndex = index + 1;  
    var prcName = '处理器' + prcIndex;
    return prcName;
}
//处理器在位状态转化为文字
function _preStatusToLang(install_staus) {
    switch(install_staus) {
        case 0:
            return '不在位';
        case 1:
            return '在位';
        default:
            break;
    }
}
//转换处理器状态为文字
function statusToString(status) {
    if (status === 0) {
        return '异常';
    } else {
        return '正常';
    }
}
//缓存单位转换
function cacheUnitToString(unit) {
    switch(unit){
        case 0: return ' KB';
        case 1: return ' MB';
        case 2: return ' GB';
        default: return ' KB';
    }
}
function handleProcessorsData(data){
    data.map(function(item,index){
        if(item.processor_install_status ===1){
            item.memory_technology = supportTostring(item.memory_technology);
            item.processor_status = statusToString(item.processor_status);
            item.internal_l1_cache +=  cacheUnitToString(item.cache_unit1);
            item.internal_l2_cache +=  cacheUnitToString(item.cache_unit2);
            item.internal_l3_cache +=  cacheUnitToString(item.cache_unit3);
        }else {
            for(let key in item){
                if(key !== 'processor_install_status' && key !== 'processor_index'){
                    item[key] = '~';
                }
            }
        }
        item.processor_index = processNameToString(item.processor_index);
        item.processor_install_status = _preStatusToLang(item.processor_install_status);
        item.key = index;
    });
    return{
        type:INIT_PROCSEEORS_DATA,
        data:data
    };
}
function _fanNumToString(fanNum,fan_postion) {
    var fanNumber = '';
    var fanLocation = '';
    var fanName = '';
    fanNumber = '风扇' + fanNum;
    switch(fan_postion){
        case 0:
            fanLocation = '';
            break;
        case 1:
            fanLocation = '（前）';
            break;
        case 2:
            fanLocation = '（后）'; 
            break;
        case 3:
            fanLocation = '（上）';
            break;
        case 4:
            fanLocation = '（下）'; 
            break;
        case 5:
            fanLocation = '（上）（前）'; 
            break;
        case 6:
            fanLocation = '（上）（后）'; 
            break;
        case 7:
            fanLocation = '（下）（前）'; 
            break;
        case 8:
            fanLocation = '（下）（后）'; 
            break;
        default:
            break;                                               
    }
    fanName = fanNumber + ' ' + fanLocation;
    return fanName;
}
//风扇在位情况
function _presentStatusToLang(fan_status){
    switch(fan_status){
        case 0:
            return '不在位';
        case 1:
            return '在位';
        default:
            return '不在位';
    }
}
//风扇冗余状态
function _redundantToLang(redundant_status){
    switch(redundant_status){
        case 0:
            return '冗余正常';
        case 1:
            return '冗余异常';
        default:
            return '冗余异常';
    }
}
//电源是否在位
function _strToPresent(str){
    if(str === 0){
        return '不在位';
    }else{
        return '在位';
    }
}
//电源输入模式状态转换
function _strToInput(str){
    switch(str){
        case 0 : return '输入异常, 输出异常';
        case 1 : return '输入正常, 输出异常';
        case 2 : return '输入异常, 输出正常';
        case 3 : return '输入正常, 输出正常';
        default: return 'N/A';
    }
}
function handleFansData(data){
    data.map(function(item,index){
        item.fan_name = _fanNumToString(item.fan_num,item.fan_postion);
        item.fan_status = _presentStatusToLang(item.fan_status);
        item.redundant_status = _redundantToLang(item.redundant_status);
        item.key = index;
    });
    return{
        type:INIT_FANS_DATA,
        data:data
    };
}
function handlePowerData(data){
    data.map(function(item,index){
        item.present = _strToPresent(item.present );
        item.input_mode = _strToInput(item.input_mode);
        item.key = index;
    });
    return{
        type:INIT_POWER_DATA,
        data:data
    };
}
export function getCPUSData(){
    return async (dispatch)=>{
        const res = await axios.get('http://system/cupsdata');
        if(res.status === 200){
            let data = res.data;
            for(let i in data){
                data[i].key = i;
            }
            dispatch({
                type:INIT_CPUS_DATA,
                data:data
            });
        }
    };
}

export function getProcessorsData(){
    return async (dispatch)=>{
        const res = await axios.get('http://system/processdata');
        if(res.status === 200){
            dispatch(handleProcessorsData(res.data));
        }
    };
}
export function getFansData(){
    return async (dispatch)=>{
        const res = await axios.get('http://system/hardware_fan');
        if(res.status === 200){
            dispatch(handleFansData(res.data));
        }
    };
}

export function getPowerData(){
    return async (dispatch)=>{
        const res = await axios.get('http://system/hardware_power');
        if(res.status === 200){
            dispatch(handlePowerData(res.data));
        }
    };
}