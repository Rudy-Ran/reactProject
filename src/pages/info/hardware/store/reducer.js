import {fromJS} from 'immutable';
import {INIT_CPUS_DATA,INIT_PROCSEEORS_DATA,INIT_FANS_DATA,INIT_POWER_DATA} from './actionCreators.js';
const initState = fromJS({
    indexKey:'1',
    CPUSData:{},
    ProcessorsData:{},
    FansData:{},
    PowerData:{},
    MemoryData:{},
    CPUColumns: [
        {
            title: 'CPU CUPS动态负载率',
            dataIndex: 'CUPS_CPU',
            key: 'CUPS_CPU',
        },
        {
            title: 'Memory CUPS动态负载率',
            dataIndex: 'CUPS_MEM',
            key: 'CUPS_MEM',
        },
        {
            title: 'IO CUPS动态负载率',
            dataIndex: 'CUPS_IO',
            key: 'CUPS_IO',
        },
    ],
    ProcessorsColums:[
        {
            title: '处理器',
            dataIndex: 'processor_index',
            key: 'processor_index',
        },
        {
            title: '在位状态',
            dataIndex: 'processor_install_status',
            key: 'processor_install_status',
        },        {
            title: '型号',
            dataIndex: 'processor_name',
            key: 'processor_name',
        },        {
            title: '状态',
            dataIndex: 'processor_status',
            key: 'processor_status',
        },        {
            title: '主频',
            dataIndex: 'processor_speed',
            key: 'processor_speed',
        },    
        {
            title: '核心数',
            dataIndex: 'core_num',
            key: 'core_num',
        },
        {
            title: '线程数',
            dataIndex: 'threads',
            key: 'threads',
        },
        {
            title: '支持64位',
            dataIndex: 'memory_technology',
            key: 'memory_technology',
        },
        {
            title: '一级缓存',
            dataIndex: 'internal_l1_cache',
            key: 'internal_l1_cache',
        },
        {
            title: '二级缓存',
            dataIndex: 'internal_l2_cache',
            key: 'internal_l2_cache',
        },
        {
            title: '三级缓存',
            dataIndex: 'internal_l3_cache',
            key: 'internal_l3_cache',
        }
    ],
    FansColums:[
        {
            title: '风扇',
            dataIndex: 'fan_name',
            key: 'fan_name',
        },
        {
            title: '型号',
            dataIndex: 'fan_bom',
            key: 'fan_bom',
        },
        {
            title: '转速(RPM)',
            dataIndex: 'fan_speed',
            key: 'fan_speed',
        },
        {
            title: '速率比(%)',
            dataIndex: 'fan_dutycycle',
            key: 'fan_dutycycle',
        },
        {
            title: '在位状态',
            dataIndex: 'fan_status',
            key: 'fan_status',
        },
        {
            title: '冗余状态',
            dataIndex: 'redundant_status',
            key: 'redundant_status',
        },
    ],
    PowerColums:[
        {
            title: '电源序号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '在位状态',
            dataIndex: 'present',
            key: 'present',
        },
        {
            title: '型号',
            dataIndex: 'model',
            key: 'model',
        },
        {
            title: '厂商',
            dataIndex: 'manufacturer',
            key: 'manufacturer',
        },
        {
            title: '序列号',
            dataIndex: 'serial',
            key: 'serial',
        },
        {
            title: '固件版本',
            dataIndex: 'version',
            key: 'version',
        },
        {
            title: '电源状态',
            dataIndex: 'input_mode',
            key: 'input_mode',
        },
        {
            title: '最大功率',
            dataIndex: 'max_power',
            key: 'max_power',
        },
    ]
});
export default function(state = initState,action){
    switch(action.type){
        case INIT_CPUS_DATA:
            return state.set('CPUSData',action.data);
        case INIT_PROCSEEORS_DATA:
            return state.set('ProcessorsData',action.data);
        case INIT_FANS_DATA:
            return state.set('FansData',action.data);
        case INIT_POWER_DATA:
            return state.set('PowerData',action.data);
        default:
            return state;
    }
}