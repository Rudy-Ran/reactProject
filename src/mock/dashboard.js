let Mock = require('mockjs');
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
let alarm_info = {
    url:'/alarm_info',
    data:Mock.mock({      
        allselnum: 20,
        cc: "0",
        critical: 1,
        major: 5,
        minor: 4,
        ok: 413,   
    })
}

let health_info = {
    url:'/health_info',
    data:Mock.mock({
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
    })
}
let uid_status = {
    url:'/remote/uid',
    data:Mock.mock({
        cc: 0,
        status:2
    })
}
let chassis_status = {
    url:'/chassis_status',
    data:Mock.mock({
        cc: 1,
        led_status: 0,
        power_status: 0,
    })
}
let tcg_status = {
    url:'/tcg_status',
    data:Mock.mock({
        tcg_status: 1,
        tcg_type: 2
    })
}
let ntp = {
    url:'/config/get_ntp',
    data:Mock.mock({
        auto_date: 2,
        id: 1,
        localized_timestamp: 1485180418,
        primary_ntp: "1.cn.pool.ntp.org",
        secondary_ntp: "2.cn.pool.ntp.org",
        timestamp: 1485180418,
        timezone: "GMT+8",
        utc_minutes: 480
    })
}
let session = {
    url:'/settings/service-sessions',
    data:Mock.mock([{
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
    }])
}
let firmware = {
    url:'/setting/firmware',
    data:Mock.mock(verInfo2)
}
module.exports = {
    alarm_info,
    health_info,
    uid_status,
    chassis_status,
    tcg_status,
    ntp,
    session,
    firmware
}
