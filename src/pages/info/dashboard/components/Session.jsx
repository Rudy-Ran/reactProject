import React from 'react';
import {Table} from 'antd';
import {connect} from 'react-redux';
function Session(props){
    const {columns,dataSource} = props;
    const columnsJS = columns ? columns.toJS() : [];
    const dataSourceJS = dataSource ? dataSource.toJS() : [];
    return(
        <div className="session">
        <Table dataSource={dataSourceJS} columns={columnsJS} pagination={false} className="session-table"/>
    </div>
    )
}
const mapStateToProps = state =>{
    return{
        dataSource:state.getIn(['dashboard','seesionTableData']),
        columns:state.getIn(['dashboard','columns']),
    };
};

export default connect(mapStateToProps,null)(React.memo(Session));
