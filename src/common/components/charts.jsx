import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';

class Charts extends React.Component{
    componentDidMount(){
        const myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
            tooltip: {
                show:true,
                trigger: 'axis',
                showDelay:0,
                hideDelay:0,
                borderRadius:10,
            },
            legend: {
                data:'CPU使用率曲线',
                y:'20'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: false
                    },
                    dataView: {
                        show: false,
                        readOnly: false
                    },
                    magicType: {
                        show: false,
                        type: ['line', 'bar', 'stack', 'tiled']
                    },
                    restore: {
                        show: false
                    },
                    saveAsImage: {
                        show: false
                    }
                }
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLabel : {
                    // formatter: '-'+'{value}'
                },
                splitLine : {show : false},
                data: ['2018-10-08 11:19:26','2018-06-00 00:10:23','2018-06-00-00:15', '2018-06-00-00:20', '2018-06-00-00:25','2018-06-00-00:30'],
                axisLine:{
                    lineStyle:{
                        color:'black',
                        width:0.5
                    }
                },
                axisTick:{
                    show:true,
                    interval:'auto',
                    onGap:false,
                    inside:true
                }
            }],
            yAxis: [{
                type: 'value',
                axisLabel : {
                    formatter:function (value) {
                        return value + ' %';

                    }
                },
                splitLine : {show : false},
                // max:yFinalMax,   //给顶部数据增加一个平均值
                axisLine:{
                    lineStyle:{
                        color:'black',
                        width:0
                    }
                }
            }],
            series: [{
                z:0,
                type: 'line',
                stack: '功率',    //决定是否是堆积折线图
                symbol: 'none',
                smooth:true,
                name:'CPU使用率曲线',
                symbolSize:0,
                itemStyle: {
                    normal: {
                        color:'#5BD6CB',
                        areaStyle: {
                            type: 'default',
                            color:'rgba(0,0,0,0)',
                        },
                        lineStyle:{
                            color:'#5BD6CB',
                        }
                    },
                },
                data:[15,35,65,85,12,4]
            },]
        });
    }
    render(){
        return(
            <div id="main" style={{ width: 1268, height: 400 }}>

            </div>
        );
    }
}
export default Charts;
