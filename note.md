### React基础
```javascript
let flag = false;
let name = 'RUDY';
let names = ['Rudy','Ran','Jack'];
let jsx = (
    <div>
        {names.map((name,index)=><p key={index}>Hello {name}!</p>)}
        {flag ? <p>I am rudy </p>:<p>I am not rudy </p>}
        <p>I am rudy</p>
    </div>)
;
```
### Component的用法

```javascript
class Component  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'Rudy'
        }
    }
    render(){
        setTimeout(()=>{
            this.setState({
                name:'Rudy-Ran'
            })
        },2000)
        return <h1>I am {this.state.name}</h1>
    }
}
```
### React事件
```javascript
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: 'Rudy',
            age : 23,
        }
    }
    handleClick(){
        this.setState({
            age: this.state.age+1
        })
    }
    handleChange(e){
        this.setState({
            age: e.target.value
        })
    }
    render(){
       return (
           <div>
                 <h1>I am {this.state.name}!</h1>
                 <p>I am {this.state.age} years old </p>
                 <button onClick={(e)=>{this.handleClick(e)}}>加一岁</button>
                 <input onChange={(e)=>{this.handleChange(e)}}></input>
           </div>
       ) 
    }
}
ReactDOM.render(
    <Component/>,
    document.getElementById('app')
);

```
### 容器式组件
```javascript
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: 'Rudy',
            age : 23,
        }
    }
    handleClick(){
        this.setState({
            age: this.state.age+1
        })
    }
    handleChange(e){
        this.setState({
            age: e.target.value
        })
    }
    render(){
       return (
           <div>
                 <h1>I am {this.state.name}!</h1>
                 <p>I am {this.state.age} years old </p>
                 <button onClick={(e)=>{this.handleClick(e)}}>加一岁</button>
                 <input onChange={(e)=>{this.handleChange(e)}}></input>
           </div>
       ) 
    }
}
class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <h1>{this.props.children}</h1>
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
    <App/>,
    document.getElementById('app')
);
```

### 子组件给父组件传值，兄弟组件间传值
```javascript
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
ReactDOM.render(
    <Farther/>,
    document.getElementById('app')
);
```