
//转换时间戳
 export function changeTimestamp(Timestamp) {
    var time = new Date(Timestamp * 1000);
    var year = time.getUTCFullYear();
    var month = time.getUTCMonth() + 1;
    var date = time.getUTCDate();
    var hours = time.getUTCHours();
    var mimutes = time.getUTCMinutes();
    var seconds = time.getUTCSeconds();
    if ((!isNaN(month)) && (!isNaN(date)) && 　(!isNaN(hours)) && (!isNaN(mimutes)) && 　(!isNaN(seconds))) {
        month = ((month < 10) ? "0" : "") + month;
        date = ((date < 10) ? "0" : "") + date;
        hours = ((hours < 10) ? "0" : "") + hours;
        mimutes = ((mimutes < 10) ? "0" : "") + mimutes;
        seconds = ((seconds < 10) ? "0" : "") + seconds;
    }
    var buildTime = year + "-" + month + "-" + date + " " + hours + ":" + mimutes + ":" + seconds;
    return buildTime;
}
export function isHostName(hname){
    const filter = /^([a-zA-Z0-9\_\-])+$/;
    const v = new String(hname);
    if ((v.length > 63) || (v.length < 1)) {
        // delete v;
        return false;
    }
    if ((v.charAt(0) === '-') || (v.charAt(v.length - 1) === '-')) {
        // delete v;
        return false;
    }
    if (v.match(filter)) {
        // delete v;
        return true;
    }
    
    // delete v;
    return false;
}
// 子网掩码验证
//判断是否是IP 已更新正则
function isIP(ip) {
    var re = /^([1-9]|[1-9]\d|1\d\d|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
    return re.test(ip) && ip !== "0.0.0.0" && ip !== "255.255.255.255";
}
export function isSubnet(mask) {
    // 将整形数符转换为8位二进制字符串
    function paddedBinary(decimal) {
        var binary = "";
        while (decimal > 0) {
            binary = binary + (decimal % 2);
            decimal = decimal >> 1;
        }
        binary = binary.split("").reverse().join(""); 
        while (binary.length < 8) {
            binary = "0" + binary;
        }
        return binary;
    }
    // 校验ip
    if (!isIP(mask)) {
        return false;
    }

    var parts = mask.split(".");
    var binaryIp = "";
    var _part;
    //将子网掩码转换为二进制字符串
    for (var i = 0; i < parts.length; i++) {
        _part = parseInt(parseFloat(parts[i]));
        binaryIp = binaryIp + paddedBinary(_part);
    }
    //首字节必须为255
    if (parseInt(parseFloat(parts[0])) !== 255){
        return false;
    }
    //第一位0之后不能出现1
    if (binaryIp.indexOf("1", binaryIp.indexOf("0")) !== -1) {
        return false;
    }
    return true;
}
//IP最新规则
// 用法，IP.checkAll(ipStr);
export const  IP = {
    // IP格式条件
    'format': function (ip) {
        var reg = /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
        return reg.test(ip);
    },

    'retain': function (ip) {
        var reg = /^127\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
        return !reg.test(ip);
    },

    // ABC类IP
    'ABCIP': function (ip) {
        var arr = ip.split(".");
        if (arr[0] <= 223 && arr[0] >= 1) {
            return true;
        } else {
            return false;
        }
    },

    // IP黑名单
    'blacklist': function (ip) {
        var arr = ["255.255.255.255", "0.0.0.0"];
        for (var i = 0; i < arr.length; i++) {
            if (ip === arr[i]) {
                return false;
            } else { }
        }
        return true;
    },
    // 验证IP所有条件
    'checkAll': function (ip) {
        return this.format(ip) && this.blacklist(ip) && this.retain(ip) && this.ABCIP(ip);   // 不用排除子网掩码地址
    },

    // 返回二进制ip
    'binary': function (ip) {
        var arr = ip.split(".");
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            var zero = "";
            var temp = parseInt(arr[i]).toString(2);
            if (temp.length === 8) { } else {
                var len = temp.length;
                for (var j = 0; j < 8 - len; j++) {
                    zero = "0" + zero;
                }
            }
            str = str + zero + temp;
        }
        return str;
    }

};
//判断是否是合法的IPv6地址
export function checkIPV6(ipstr,allowlocal,allow00) {
    allow00 = allow00 ? allow00 : false;
    allowlocal = allowlocal ? allowlocal : false;
    function RegCheck(str)//IPV6正则判断
    {
        var reg = /^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/;
        return reg.test(str);
    }
    if (!RegCheck(ipstr)){
        // console.log('不符合IPv6格式');
        return false;
    }
    let splitip = ipstr.split(":");
    //flag1 用来判断全0和全1地址 flag2 用来判断环回地址
    var flag1=0;
    var flag2=0;
    for(var i=0; i<splitip.length; i++){
        let decip = parseInt(splitip[i], 16);
        if(splitip[i] !== ''){
            flag1+=decip;
        }
        if(splitip[i] !== '' && i<splitip.length-1) {
            flag2+=decip;
        }
        if (!allowlocal){
            if (i===0 && decip === 0xFE80) {
                // console.log('禁止本地链路地址');
                return false;
            }
        }
        // if (i===0 && decip === 0xFEC0){
        //     // console.log('禁止站点地址');
        //     return false;
        // }
        if (i===0 && decip >= 0XFF00){
            // console.log('禁止多播地址');
            return false;
        }else {}
    }
    var lastIndex = splitip[splitip.length-1];
    //禁止全0或者全1的ipv6地址
    if(!allow00){
        if(flag1===0){
            // console.log('禁止全0的IPv6地址');
            return false;
        }
        if(flag1===524280){
            // console.log('禁止全1的IPv6地址');
            return false;
        }
    }
    // 排除IPv4过渡到IPv6
    if( IP.checkAll(lastIndex)){
        // console.log('禁止IPV4过渡到IPv6的地址');
        return false;
    }
    if(flag2===0 && parseInt(lastIndex,16)===1){
        // console.log('禁止环回地址');
        return false;
    }
    return true;
}
