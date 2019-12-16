import { mock } from 'mockjs';
mock('http://network/dns',{
    'dns_manual': 0,
    'dns_server1|2': "1234::1234",
    'dns_server2|2': "1234::1234",
    'dns_server3|0-1': "1234::1234",
    'dns_status': 1,
    'domain_name|1': "ranmeng",
    'register_manual|0': 1,
});

mock('http://network/host','get',{
    'host_config': 1,
    'host_name': "RHDM210200A00TH177000013"
});
mock('http://network/host','post',{
    'host_config': 1,
    'host_name': "RHDM210200A00TH177000013"
});

//获取bond信息
mock('http://settings/network-bond','get',{
    "bond_enable":0
});
//保存bond信息
mock('http://settings/network-bond','post',{
    cc:2
});
//获取网口自适应模式信息
mock('http://settings/network_dedicate_first','get',{
    "dedicate_first_enable":0
});
//保存网口自适应模式信息
mock('http://settings/network_dedicate_first','post',{
    cc:0
});

//获取网络接口
mock('http://settings/network','get',[{
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
    "ipv6_StatelessAddress":"1234::1234",
    "ipv6_StatelessPrefix":63,
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
    "ipv6_localLinkAddress":"fe80:1234",
    "same_network":219,
    "dedicate_port_linkstate":0,
    "dedicate_first_enable":1,
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
    "ipv6_StatelessAddress":"1234::1245",
    "ipv6_StatelessPrefix":63,
    "ipv6_localLinkAddress":"fe80:1234",
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
    "same_network":219,
    "dedicate_port_linkstate":0,
    "dedicate_first_enable":1,
    "cc": 0
}]);

mock('http://settings/network','post',{
    cc:209
});

