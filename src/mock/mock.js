import { mock } from 'mockjs';
import './network.js';
var verInfo2 = [{
    "bmc_completion_code": 0,
    "bmc_revision": "1.11.16P82 HDM V100R001B02D016SP82_DEBUG",
    "bmc_build_time": "Nov 13 2018 09:57:45 CST",
    "bios_completion_code": 0,
    "bios_revision": "2.00.09P81 V100R001B02D009R89SP81",
    "cpld_completion_code": 0,
    "cpld_revision": "V01720",
    "me_completion_code": 0,
    "me_revision": "4.1.2.200",
    "completion_code": 0,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "VER.C",
    "type": "MotherBoard"
}, {
    "completion_code": 0,
    "cpld_version": "V00001",
    "eeprom_version": "VER.101",
    "pcb_version": "VER.A",
    "type": "N1_Baseboard"
}, {
    "completion_code": 0,
    "cpld_version": "V00001",
    "eeprom_version": "VER.101",
    "pcb_version": "VER.A",
    "type": "N2_Baseboard"
}, {
    "completion_code": 0,
    "cpld_version": "V00001",
    "eeprom_version": "VER.101",
    "pcb_version": "VER.B",
    "type": "PDB"
}, {
    "completion_code": 0,
    "cpld_version": "V00010",
    "eeprom_version": "",
    "pcb_version": "VER.B",
    "type": "N1_BackPlane1"
}, {
    "completion_code": 0,
    "cpld_version": "V00020",
    "eeprom_version": "",
    "pcb_version": "VER.B",
    "type": "N1_BackPlane2"
}, {
    "completion_code": 458,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "",
    "type": "N2_BackPlane1"
}, {
    "completion_code": 458,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "",
    "type": "N2_BackPlane2"
}, {
    "completion_code": 458,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "",
    "type": "N1_Riser0"
}, {
    "completion_code": 459,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "",
    "type": "N2_Riser0"
}, {
    "completion_code": 0,
    "cpld_version": "V00010",
    "eeprom_version": "",
    "pcb_version": "VER.C",
    "type": "Riser1"
}, {
    "completion_code": 0,
    "cpld_version": "V00001",
    "eeprom_version": "VER.101",
    "pcb_version": "VER.A",
    "type": "Riser2"
}, {
    "completion_code": 0,
    "cpld_version": "V001A0",
    "eeprom_version": "",
    "pcb_version": "VER.C",
    "type": "Riser3"
}, {
    "completion_code": 0,
    "cpld_version": "V002",
    "eeprom_version": "",
    "pcb_version": "VER.B",
    "type": "N3_Baseboard"
}, {
    "completion_code": 458,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "",
    "type": "N4_Baseboard"
}, {
    "completion_code": 0,
    "cpld_version": "V00001",
    "eeprom_version": "VER.101",
    "pcb_version": "VER.B",
    "type": "PDB1"
}, {
    "completion_code": 458,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "",
    "type": "N3_BackPlane1"
}, {
    "completion_code": 0,
    "cpld_version": "002a",
    "eeprom_version": "",
    "pcb_version": "VER.B",
    "type": "N3_BackPlane2"
}, {
    "completion_code": 458,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "",
    "type": "N4_BackPlane1"
}, {
    "completion_code": 458,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "",
    "type": "N4_BackPlane2"
}, {
    "completion_code": 459,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "",
    "type": "N3_Riser0"
}, {
    "completion_code": 459,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "",
    "type": "N4_Riser0"
}, {
    "completion_code": 0,
    "cpld_version": "V002",
    "eeprom_version": "",
    "pcb_version": "VER.C",
    "type": "Riser4"
}, {
    "completion_code": 458,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "",
    "type": "Riser5"
}, {
    "completion_code": 0,
    "cpld_version": "V00002",
    "eeprom_version": "",
    "pcb_version": "VER.C",
    "type": "Riser6"
}, {
    "completion_code": 0,
    "cpld_version": "V00001",
    "eeprom_version": "VER.101",
    "pcb_version": "VER.A",
    "type": "sLOM0"
}, {
    "completion_code": 459,
    "cpld_version": "",
    "eeprom_version": "",
    "pcb_version": "",
    "type": "sLOM1"
}, {
    "completion_code": 0,
    "cpld_version": "V00001",
    "eeprom_version": "VER.101",
    "pcb_version": "VER.A",
    "type": "sLOM0_Switch"
}, {
    "completion_code": 0,
    "cpld_version": "V00001",
    "eeprom_version": "V00001",
    "pcb_version": "V00001",
    "type": "sLOM1_Switch"
}, {
    "diagnostic_completion_code": 1,
    "diagnostic_cpld_version": "",
    "diagnostic_pcb_version": "",
    "type": "diagnostic_panel"
}];



mock('http://alarm_info','get',{
    allselnum: 20,
    cc: "0",
    critical: 1,
    major: 5,
    minor: 4,
    ok: 413,
});


mock('http://health_info','get',{
    cc: 0,
    current: 2,
    disk: 0,
    fans: 3,
    health: 3,
    memory: 0,
    power: 1,
    processor: 0,
    temperature: 1,
    volatge: 0,
});
//获取UID灯状态
mock('http://remote/uid','get',{
    cc : 0,
    status: 2
});
//获取电源状态
mock('http://chassis_status','get',{
    cc: 1,
    led_status: 0,
    power_status: 0,
});
//获取TPM/TCM状态
mock('http://tcg_status','get',{
    tcg_status: 1,
    tcg_type: 2
});

//获取时间
mock('http://config/get_ntp','get',{
    auto_date: 2,
    id: 1,
    localized_timestamp: 1485180418,
    primary_ntp: "1.cn.pool.ntp.org",
    secondary_ntp: "2.cn.pool.ntp.org",
    timestamp: 1485180418,
    timezone: "GMT+8",
    utc_minutes: 480
});

//获取session
mock('http://settings/service-sessions','get',[{
    "id": 10,
    "session_id": 1,
    "session_type": 2,
    "client_ip": "192.168.10.34",
    "user_id": 3,
    "user_name": "admin",
    "user_privilege": 4
},{
    "id": 2,
    "session_id": 2,
    "session_type": 1,
    "client_ip": "192.168.10.34",
    "user_id": 1,
    "user_name": "admin",
    "user_privilege": 4
}]);


//CPUS


//获取TPM/TCM状态
mock('http://setting/firmware','get',verInfo2);


//CPUS
mock('http://system/cupsdata','get',[{
    CUPS_CPU: 100,
    CUPS_IO: 0,
    CUPS_MEM: 0,
    cc: 0,
    powerstatus: 1,
}]);
mock('http://system/processdata',[{
    cache_unit1: 1,
    cache_unit2: 2,
    cache_unit3: 2,
    cc: 0,
    core_num: 22,
    internal_l1_cache: 1408,
    internal_l2_cache: 22528,
    internal_l3_cache: 30976,
    memory_technology: 0,
    processor_index: 0,
    processor_install_status: 1,
    processor_name: "Intel(R) Xeon(R) Gold 6152 CPU @ 2.10GHz",
    processor_speed: 2100,
    processor_status: 1,
    threads: 44,
},{
    cache_unit1: 1,
    cache_unit2: 2,
    cache_unit3: 2,
    cc: 0,
    core_num: 0,
    internal_l1_cache: 0,
    internal_l2_cache: 0,
    internal_l3_cache: 0,
    memory_technology: 1,
    processor_index: 1,
    processor_install_status: 0,
    processor_name: "",
    processor_speed: 0,
    processor_status: 0,
    threads: 0
}]);
var fan_status = [{
    "fan_num": "1",
    "fan_rotor_type": 1,
    "fan_bom": "9901A3C3",
    "fan_speed": 4800,
    "fan_dutycycle": 34,
    "fan_status": 1,
    "redundant_status": 0,
    "fan_postion": 3,
    "cc": 0,
    "fan_maxspeed": 50
}, {
    "fan_num": "1  ",
    "fan_rotor_type": 2,
    "fan_bom": "9901A3C3",
    "fan_speed": 5000,
    "fan_dutycycle": 34,
    "fan_status": 1,
    "redundant_status": 0,
    "fan_postion": 1,
    "cc": 0,
    "fan_maxspeed": 50
}, {
    "fan_num": 2,
    "fan_rotor_type": 1,
    "fan_bom": "9901A3C3",
    "fan_speed": 4800,
    "fan_dutycycle": 34,
    "fan_status": 1,
    "redundant_status": 0,
    "fan_postion": 2,
    "cc": 0,
    "fan_maxspeed": 50
}, {
    "fan_num": 2,
    "fan_rotor_type": 2,
    "fan_bom": "9901A3C3",
    "fan_speed": 4800,
    "fan_dutycycle": 34,
    "fan_status": 1,
    "redundant_status": 0,
    "fan_postion": 0,
    "cc": 0,
    "fan_maxspeed": 50
}, {
    "fan_num": 3,
    "fan_rotor_type": 1,
    "fan_bom": "9901A3C3",
    "fan_speed": 4800,
    "fan_dutycycle": 34,
    "fan_status": 1,
    "redundant_status": 0,
    "fan_postion": 5,
    "cc": 0,
    "fan_maxspeed": 50
}, {
    "fan_num": 3,
    "fan_rotor_type": 2,
    "fan_bom": "9901A3C3",
    "fan_speed": 4800,
    "fan_dutycycle": 34,
    "fan_status": 1,
    "redundant_status": 0,
    "fan_postion": 3,
    "cc": 0,
    "fan_maxspeed": 50
}, {
    "fan_num": 4,
    "fan_rotor_type": 1,
    "fan_bom": "9901A3C3",
    "fan_speed": 4800,
    "fan_dutycycle": 34,
    "fan_status": 1,
    "redundant_status": 0,
    "fan_postion": 3,
    "cc": 0,
    "fan_maxspeed": 50
}, {
    "fan_num": 4,
    "fan_rotor_type": 2,
    "fan_bom": "9901A3C3",
    "fan_speed": 4800,
    "fan_dutycycle": 34,
    "fan_status": 1,
    "redundant_status": 0,
    "fan_postion": 4,
    "cc": 0,
    "fan_maxspeed": 50
}, {
    "fan_num": 5,
    "fan_rotor_type": 1,
    "fan_bom": "9901A3C3",
    "fan_speed": 4800,
    "fan_dutycycle": 34,
    "fan_status": 1,
    "redundant_status": 0,
    "fan_postion": 3,
    "cc": 0,
    "fan_maxspeed": 50
}, {
    "fan_num": 5,
    "fan_rotor_type": 2,
    "fan_bom": "9901A3C3",
    "fan_speed": 4800,
    "fan_dutycycle": 34,
    "fan_status": 1,
    "redundant_status": 0,
    "fan_postion": 4,
    "cc": 0,
    "fan_maxspeed": 50
}, {
    "fan_num": 6,
    "fan_rotor_type": 1,
    "fan_bom": "9901A3C3",
    "fan_speed": 4800,
    "fan_dutycycle": 34,
    "fan_status": 1,
    "redundant_status": 0,
    "fan_postion": 3,
    "cc": 0,
    "fan_maxspeed": 50
}, {
    "fan_num": 6,
    "fan_rotor_type": 2,
    "fan_bom": "9901A3C3",
    "fan_speed": 4800,
    "fan_dutycycle": 34,
    "fan_status": 1,
    "redundant_status": 0,
    "fan_postion": 4,
    "cc": 0,
    "fan_maxspeed": 50
}];

mock('http://system/hardware_fan','get',fan_status);

mock('http://system/hardware_power','get',[{
    "id": 1,
    "present": 1,
    "model": "PSR1200-12A",
    "serial": "210213A060H177000026",
    "max_power": 1200,
    "manufacturer": "FSP-GROUP",
    "input_mode": 0,
    "version": "9M.SA03.0002.002",
    "cc": 0
}, {
    "id": 2,
    "present": 1,
    "model": "PSR1200-12A",
    "serial": "210213A060H177000027",
    "max_power": 1200,
    "manufacturer": "FSP-GROUP",
    "input_mode": 3,
    "version": "9M.SA03.0002.002",
    "cc": 0
}]);


var data1 = {
    "historical_cpu": [ {
        "Cur": 9,
        "time": "2018-06-00-00:15"
    }, {
        "Cur": 45,
        "time": "2018-06-00-00:20"
    }, {
        "Cur": 76,
        "time": "2018-06-00-00:25"
    }, {
        "Cur": 84,
        "time": "2018-06-00-00:30"
    }, {
        "Cur": 57,
        "time": "2018-06-01-00:35"
    },  {
        "Cur": 43,
        "time": "2018-06-01-00:45"
    }, {
        "Cur": 31,
        "time": "2018-06-01-00:50"
    }, {
        "Cur": 24,
        "time": "2018-06-01-00:55"
    }, {
        "Cur": 19,
        "time": "2018-06-02-01:00"
    }, {
        "Cur": 34,
        "time": "2018-06-02-01:05"
    }, {
        "Cur": 78,
        "time": "2018-06-02-01:10"
    },  {
        "Cur": 76,
        "time": "2018-06-03-01:20"
    }, {
        "Cur": 67,
        "time": "2018-06-03-01:25"
    }, {
        "Cur": 85,
        "time": "2018-06-03-01:30"
    }, {
        "Cur": 23,
        "time": "2018-06-03-01:35"
    }, {
        "Cur": 15,
        "time": "2018-06-03-01:40"
    }, {
        "Cur": 26,
        "time": "2018-06-04-01:45"
    }, {
        "Cur": 56,
        "time": "2018-06-04-01:50"
    }, {
        "Cur": 44,
        "time": "2018-06-04-01:55"
    }, {
        "Cur": 86,
        "time": "2018-06-04-02:00"
    }, {
        "Cur": 32,
        "time": "2018-06-04-02:05"
    }, {
        "Cur": 12,
        "time": "2018-06-04-02:10"
    }, {
        "Cur": 66,
        "time": "2018-06-04-02:15"
    }, {
        "Cur": 54,
        "time": "2018-06-05-02:20"
    }, {
        "Cur": 45,
        "time": "2018-06-05-02:25"
    }, {
        "Cur": 67,
        "time": "2018-06-05-02:30"
    }, {
        "Cur": 89,
        "time": "2018-06-05-02:35"
    }, {
        "Cur": 75,
        "time": "2018-06-05-02:40"
    }, {
        "Cur": 68,
        "time": "2018-06-05-02:45"
    }, {
        "Cur": 43,
        "time": "2018-06-05-02:50"
    }, {
        "Cur": 44,
        "time": "2018-06-05-02:55"
    }, {
        "Cur": 56,
        "time": "2018-06-05-03:00"
    }, {
        "Cur": 9,
        "time": "2018-06-06-03:05"
    }, {
        "Cur": 1,
        "time": "2018-06-06-03:10"
    }, {
        "Cur": 49,
        "time": "2018-06-06-03:15"
    }, {
        "Cur": 61,
        "time": "2018-06-06-03:20"
    }, {
        "Cur": 78,
        "time": "2018-06-07-03:25"
    }, {
        "Cur": 83,
        "time": "2018-06-07-03:30"
    }, {
        "Cur": 69,
        "time": "2018-06-07-03:40"
    }, ],
    "cc": 0
};

var data2 = {
    "historical_mem": [{
        "Cur": 35,
        "time": "2018-06-00-00:05"
    }, {
        "Cur": 75,
        "time": "2018-06-00-00:10"
    }, {
        "Cur": 96,
        "time": "2018-06-00-00:15"
    }, {
        "Cur": 41,
        "time": "2018-06-00-00:20"
    }, {
        "Cur": 26,
        "time": "2018-06-00-00:25"
    }, {
        "Cur": 44,
        "time": "2018-06-00-00:30"
    }, {
        "Cur": 77,
        "time": "2018-06-01-00:35"
    }, {
        "Cur": 46,
        "time": "2018-06-01-00:40"
    }, {
        "Cur": 93,
        "time": "2018-06-01-00:45"
    }, {
        "Cur": 39,
        "time": "2018-06-01-00:50"
    }, {
        "Cur": 67,
        "time": "2018-06-01-00:55"
    }, {
        "Cur": 19,
        "time": "2018-06-02-01:00"
    }, {
        "Cur": 34,
        "time": "2018-06-02-01:05"
    }, {
        "Cur": 78,
        "time": "2018-06-02-01:10"
    }, {
        "Cur": 46,
        "time": "2018-06-02-01:15"
    }, {
        "Cur": 23,
        "time": "2018-06-03-01:20"
    }, {
        "Cur": 67,
        "time": "2018-06-03-01:25"
    }, {
        "Cur": 85,
        "time": "2018-06-03-01:30"
    }, {
        "Cur": 65,
        "time": "2018-06-03-01:35"
    }, {
        "Cur": 34,
        "time": "2018-06-03-01:40"
    }, {
        "Cur": 26,
        "time": "2018-06-04-01:45"
    }, {
        "Cur": 56,
        "time": "2018-06-04-01:50"
    }, {
        "Cur": 44,
        "time": "2018-06-04-01:55"
    }, {
        "Cur": 86,
        "time": "2018-06-04-02:00"
    }, {
        "Cur": 79,
        "time": "2018-06-04-02:05"
    }, {
        "Cur": 12,
        "time": "2018-06-04-02:10"
    }, {
        "Cur": 66,
        "time": "2018-06-04-02:15"
    }, {
        "Cur": 86,
        "time": "2018-06-05-02:20"
    }, {
        "Cur": 45,
        "time": "2018-06-05-02:25"
    }, {
        "Cur": 67,
        "time": "2018-06-05-02:30"
    }, {
        "Cur": 89,
        "time": "2018-06-05-02:35"
    }, {
        "Cur": 75,
        "time": "2018-06-05-02:40"
    }, {
        "Cur": 68,
        "time": "2018-06-05-02:45"
    }, {
        "Cur": 63,
        "time": "2018-06-05-02:50"
    }, {
        "Cur": 44,
        "time": "2018-06-05-02:55"
    }, {
        "Cur": 56,
        "time": "2018-06-05-03:00"
    }, {
        "Cur": 9,
        "time": "2018-06-06-03:05"
    }, {
        "Cur": 1,
        "time": "2018-06-06-03:10"
    }, {
        "Cur": 49,
        "time": "2018-06-06-03:15"
    }, {
        "Cur": 61,
        "time": "2018-06-06-03:20"
    }, {
        "Cur": 78,
        "time": "2018-06-07-03:25"
    }, {
        "Cur": 83,
        "time": "2018-06-07-03:30"
    }, {
        "Cur": 46,
        "time": "2018-06-07-03:35"
    }, {
        "Cur": 69,
        "time": "2018-06-07-03:40"
    }, {
        "Cur": 45,
        "time": "2018-06-07-03:45"
    }],
    "cc": 0
};


mock('http://system/curve_cpu_data','get',data1);

mock('http://system/curve_mem_data','get',data2);


