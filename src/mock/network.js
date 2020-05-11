let Mock = require('mockjs');
let network = {
    url: '/settings/network',
    data: Mock.mock([{
        "id": 1,
        "interface_name": "eth0",
        "channel_number": 1,
        "lan_enable": 0,
        "mac_address": "74:EA:CB:5A:5D:53",
        "ipv4_enable": 1,
        "ipv4_dhcp_enable": 1,
        "ipv4_address": "192.168.19.157",
        "ipv4_subnet": "255.255.0.0",
        "ipv4_gateway": "0.0.0.0",
        "ipv6_enable": 1,
        "ipv6_dhcp_enable": 1,
        "ipv6_address": "3ffe:501:eeee:200:76ea:cbff:fe5a:5d53",
        "ipv6_StatelessAddress": "1234::1234",
        "ipv6_StatelessPrefix": 63,
        "ipv6_index": 0,
        "ipv6_prefix": 64,
        "ipv6_gateway": "::",
        "vlan_enable": 1,
        "vlan_id": 0,
        "vlan_priority": 64,
        "linkup_vlan_enable": 1,
        "linkup_vlan_id": 1,
        "linkup_vlan_priority": 1,
        "linkdown_vlan_enable": 1,
        "linkdown_vlan_id": 2,
        "linkdown_vlan_priority": 2,
        "ipv6_localLinkAddress": "fe80:1234",
        "same_network": 219,
        "dedicate_port_linkstate": 0,
        "dedicate_first_enable": 1,
        "cc": 0
    }, {
        "id": 2,
        "interface_name": "eth1",
        "channel_number": 8,
        "lan_enable": 1,
        "mac_address": "74:EA:CB:5A:5D:52",
        "ipv4_enable": 1,
        "ipv4_dhcp_enable": 1,
        "ipv4_address": "192.168.1.2",
        "ipv4_subnet": "255.255.255.0",
        "ipv4_gateway": "0.0.0.0",
        "ipv6_enable": 0,
        "ipv6_dhcp_enable": 0,
        "ipv6_address": "3ffe:501:eeee:200:76ea:cbff:fe5a:5d52",
        "ipv6_StatelessAddress": "1234::1245",
        "ipv6_StatelessPrefix": 63,
        "ipv6_localLinkAddress": "fe80:1234",
        "ipv6_index": 0,
        "ipv6_prefix": 64,
        "ipv6_gateway": "::",
        "vlan_enable": 0,
        "vlan_id": 1,
        "vlan_priority": 64,
        "linkup_vlan_enable": 1,
        "linkup_vlan_id": 2,
        "linkup_vlan_priority": 2,
        "linkdown_vlan_enable": 0,
        "linkdown_vlan_id": 3,
        "linkdown_vlan_priority": 3,
        "same_network": 219,
        "dedicate_port_linkstate": 0,
        "dedicate_first_enable": 1,
        "cc": 0
    }])
}
let host = {
    url: '/network/host',
    data: Mock.mock({
        "host_config": 1,
        "host_name": "RHDM210200A00TH177000013"
    })
}
let dns = {
    url: '/network/dns',
    data: Mock.mock({
        'dns_manual': 0,
        'dns_server1|2': "1234::1234",
        'dns_server2|2': "1234::1234",
        'dns_server3|0-1': "1234::1234",
        'dns_status': 1,
        'domain_name|1': "ranmeng",
        'register_manual|0': 1,
    })
}
let port_mode = {
    url: '/settings/network_portmode',
    data: Mock.mock({
        port_mode: 0,
        cc: 0
    })
}
let port_mode_post = {
    url: '/settings/network_portmode',
    method:"post",
    data: Mock.mock({
        cc: 0
    })
}
module.exports = {
    network,
    host,
    dns,
    port_mode,
    port_mode_post,
    // get_host
}


// mock('http://network/host','post',{

// });

// //获取bond信息
// mock('http://settings/network-bond','get',{
//     "bond_enable":0
// });
// //保存bond信息
// mock('http://settings/network-bond','post',{
//     cc:2
// });
// //获取网口自适应模式信息
// mock('http://settings/network_dedicate_first','get',{
//     "dedicate_first_enable":0
// });
// //保存网口自适应模式信息
// mock('http://settings/network_dedicate_first','post',{
//     cc:0
// });

// //获取网络接口
// mock('http://settings/network','get',);

// mock('http://settings/network','post',{
//     cc:209
// });