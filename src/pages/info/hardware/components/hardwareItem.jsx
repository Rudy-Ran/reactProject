import React,{Component} from 'react';
import {Table } from 'antd';
class HardWareItem extends Component{
    render(){
        const columns = this.props.columns;
        return(
            <div>
                <Table dataSource={this.props.dataSource} columns={columns} pagination={false} bordered={true}style={{marginTop:'20px'}}/>
            </div>
        );
    }
}
export default HardWareItem;