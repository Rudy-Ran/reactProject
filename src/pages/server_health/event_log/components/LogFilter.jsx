import React from 'react';
import {Table} from 'antd';
import {connect} from 'react-redux';
class LogTable extends React.Component {
    render() {
        const {columns,dataSource} = this.props;
        return (
            <div className="session">
                <Table dataSource={Array.isArray(dataSource) ? dataSource : []} columns={columns} pagination={false} className="session-table"/>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        dataSource:state.getIn(['dashboard','seesionTableData']),
        columns:state.getIn(['dashboard','columns']).toJS(),
    };
};

export default connect(mapStateToProps,null)(LogTable);
