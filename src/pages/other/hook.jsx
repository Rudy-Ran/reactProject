import React, { useState } from 'react';
import { Form, Input, Button} from 'antd';
import './hooks.css';
import TodoItem from './TodoItem.jsx';
function TodoBox(){
    const [task, setTask] = useState({
        data:[
            {
                "id": "1",
                "task": "做一个TodoList Demo",
                "complete": "false"
            }, {
                "id": "2",
                "task": "学习ES6",
                "complete": "false"
            }, {
                "id": "3",
                "task": "Hello React",
                "complete": "true"
            }, {
                "id": "4",
                "task": "找工作",
                "complete": "false"
            }
        ],
        inputValue:'123'
    });
    function inputChange(e){
        
        // setTask(task.inputValue = )
    }
    var taskList = task.data.map(listItem=>
        <TodoItem taskId={listItem.id}
            key={listItem.id}
            task={listItem.task}
            complete={listItem.complete} />);
    return(
        <div id="example">
            <div className="well">
                <h1 className="text-center">React TodoList</h1>
                <ul className="list-group">
                    {taskList}
                </ul>
                <div className="addtodoitem">
                    <Form.Item>
                        <label htmlFor="newItem"></label>
                        <Input id="newItem" type="text"  placeholder="吃饭睡觉打豆豆" onChange={(e)=>inputChange()} ></Input>
                        <Button type="primary" className="pull-right" >保存</Button>
                    </Form.Item>
                </div>
            </div>
        </div>
    );
}
export default TodoBox;