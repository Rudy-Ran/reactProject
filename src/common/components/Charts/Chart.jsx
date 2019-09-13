import React from 'react';
import './Chart.css';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
const tickLine = {
    lineWidth: 1, // 刻度线宽
    stroke: '#333', // 刻度线的颜色
    length: -5, // 刻度线的长度, **原来的属性为 line**,可以通过将值设置为负数来改变其在轴上的方向
};
const tooltipsDisplayTpl = `
    <p class="chart-tooptip" style={{background:'red'}}>
            <span class="chart-tooptip-right">{name1}</span>
            <span>{value1}</span>
            <br/>
            <span class="chart-tooptip-right">{name2}</span>
            <span>{value2}</span>
    </p>
`;
class Charts extends React.PureComponent{

    render(){
        const cols = {
            time:{
                alias:"日期",
                tickCount:10,
            },
            Cur:{
                alias:this.props.alias
            }
        };
        return(
            <Chart height={400} data={this.props.data} forceFit scale={cols} padding={60}>
                <Axis  name="time" title={null} tickLine={tickLine} line={{stroke:"#e6e6e6"}}/>
                <Axis  name="Cur" line={false} grid={null} title={null}/>
                <Tooltip  itemTpl={ tooltipsDisplayTpl } showTitle={false} />
                <Geom type="line" size={2} position="time*Cur" color="#5BD6CB"  shape="smooth" 
                    tooltip={
                        ['time*Cur',(time,Cur)=>{
                            const str = this.props.alias;
                            return{
                                name1:'日期: ',
                                value1:time,
                                name2:str,
                                value2:Cur + '%'
                            };
                        }]
                    } />
            </Chart>
        );   
    }
}
export default Charts;