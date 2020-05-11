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

## React-Router 笔记
### ```<Router>```
<Router>下只允许存在一个子元素，如果存在多个，则会报错
```javascript
/*错误的实例*/
<Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">关于</Link></li>
        <li><Link to="/topics">主题列表</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
 </Router>
```
上面的代码会报错，应该用div将里面的元素包裹起来

### ```<Route>```
指定当location匹配某个路由的path时，渲染指定的UI。
#### 属性
- `path`:匹配的路径
- `exact(bool)`:为true的时候，要求必须和`location.pathname`必须完全匹配
- `strict(bool)`:true的时候，有结尾斜线的路径只能匹配有斜线的路径只能匹配有斜线的`location.pathname`
#### 渲染内容的方法
- `<Route component>:`当地址匹配的时候才回去渲染组件，`route props`也会一起被渲染
- `<Route render>:`这种方式对于内联渲染和包装组件却不引起意料之外的重新挂载特别方便
- `<Route children>:`与render属性的工作方式基本一样，除了它是不管地址匹配与否都会被调用
```javascript
<Route path="/home" render={() => <div>Home</div>}/>
```

### TODO

- 网络模块下，共享网口和专用网口目前都是用的Network组件，这个地方可以优化下，用一个文件搞定，思路是获取url判断用户当前点击的是专用网口还是共享网口，应该涉及 `withRouter`
- 网卡选择页面未实现
- post方法在F12不显示传递的参数，axios需要进一步封装
- mock还可以在进一步优化下
- 对于输入框的Error处理是否有更好的方式