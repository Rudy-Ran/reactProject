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