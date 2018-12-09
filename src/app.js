/*
* @Author: Rosen
* @Date:   2018-01-19 17:40:57
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-19 17:52:40
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
class Component  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'Rudy'
        }
    }
    render(){
        // setTimeout(()=>{
        //     this.setState({
        //         name:'Rudy-Ran'
        //     })
        // },2000)
        return <h1>I am {this.props.name}</h1>
    }
}
ReactDOM.render(
    <Component name="RRRRRRudy"/>,
    document.getElementById('app')
);


