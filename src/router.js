import DashBoard from '@/pages/info/dashboard/dashboard.jsx';
import HardWare from '@/pages/info/hardware/hardware.jsx';
import FirmWare from '@/pages/info/firmware/firmware.jsx';
import Resource from '@/pages/info/resource_summary/resource.jsx';
import Monitor from '@/pages/info/Monitor/monitor.jsx';
import EventLog from '@/pages/server_health/event_log/index.jsx';
import DNS from '@/pages/network/dns/index.jsx';
import PortMode from '@/pages/network/portmode/PortMode.jsx';
import Dedicate from '@/pages/network/network_config/Dedicate.jsx';
import SharedPort from '@/pages/network/network_config/SharedPort.jsx';
import TodoBox from '@/pages/other/hook.jsx';
const router = [
    {
        path: '/',
        component: DashBoard,
        exact:true 
    },
    {
        path:'/info/dashboard',
        component:DashBoard
    },
    {
        path:'/info/hardware',
        component:HardWare
    },
    {
        path:'/info/firmware',
        component:FirmWare
    },
    {
        path:'/info/resource_summary',
        component:Resource
    },
    {
        path:'/info/monitoring',
        component:Monitor
    },
    {
        path:'/server_health/event_log',
        component:EventLog
    },
    {
        path:'/network/dedicated_port',
        component:Dedicate
    },
    {
        path:'/network/shared_port',
        component:SharedPort
    },
    {
        path:'/network/dns',
        component:DNS
    },
    {
        path:'/network/port_mode',
        component:PortMode
    },
    {
        path:'/other/roughviz',
        component:TodoBox
    }
];
export default router;