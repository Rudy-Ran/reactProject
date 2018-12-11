import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Child1 extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(){
        this.props.colorChange('red');
    }
    render(){
       return (
           <div>
                 <h1>Child1:</h1>
                 <button onClick={(e)=>{this.handleClick(e)}}>改变兄弟组件颜色</button>
           </div>
       ) 
    }
}
class Child2 extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(){
        this.props.colorChange('red');
    }
    render(){
       return (
           <div>
                 <h1 style={{background:this.props.bgColor}}>Child2</h1>
           </div>
       ) 
    }
}

class Farther extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bgColor:'#999'
        }
    }
    bgColorChange(color){
        this.setState({
            bgColor:color
        })
    }
    render(){
        return <div>
            <Child1 colorChange={(color)=>{this.bgColorChange(color)}}/>
            <Child2 bgColor={this.state.bgColor}/>
        </div>
    }
}

class App extends React.Component{
    render(){
        return (
            <div>
                {/* 容器组件 */}
                <Title>
                    <span>rudy</span>
                    <a href="">ran</a>
                </Title>
                <hr></hr>
                {/* 单纯组件 */}
                 <Component/>
            </div>
       )
    }
}
ReactDOM.render(
    <Farther/>,
    document.getElementById('app')
);


