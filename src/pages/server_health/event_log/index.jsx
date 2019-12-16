import React from 'react';
import Title from "@/common/components/subSection/subSectionTitle.jsx";
import {connect} from 'react-redux';
class EventLog extends React.Component{
    render(){
  
        return(
            <Title title="日志列表"/>
        );
    }
    componentDidMount(){
        
    }
}
const mapStateToProps = state=>{
    return{

    };
};
const mapDispatchToProps = dispatch=>{
    return{

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(EventLog);