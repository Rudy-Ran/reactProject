import React from 'react';
import {Row, Col, Checkbox, Button} from 'antd';
class TodoItem extends React.Component{
    constructor(props){
        super(props);
    }
    deleteTask(){
        this.props.deleteTask(this.props.taskId);
    }
    toggleComplete(){
        this.props.toggleComplete(this.props.taskId);
    }
    render(){
        let task = this.props.task;
        let itemChecked;
        if(this.props.complete === 'true'){
            task = <del>{task}</del>;
            itemChecked = true;
        }else {
            itemChecked = false;
        }
        return(
            <li className="list-group-item">
                <Row>
                    <Col span={12}>
                        <Checkbox onChange={(e)=>{this.toggleComplete()}} checked={itemChecked}/> {task}
                    </Col>
                    <Col span={12}>
                        <Button type="danger" className="pull-right" onClick={(e)=>{this.deleteTask()}}>删除</Button>
                    </Col>
                </Row>
            </li>
        );
    }
}
export default TodoItem;