import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import { Table } from 'antd';
export default function Session() {
    const mapState = useCallback(
        state => ({
            dataSource: state.getIn(['dashboard', 'seesionTableData']),
            columns: state.getIn(['dashboard', 'columns']).toJS(),
        })
    )
    const { columns, dataSource } = useMappedState(mapState)
    return (
        <div className="session">
            <Table dataSource={Array.isArray(dataSource) ? dataSource : []} columns={columns} pagination={false} className="session-table" />
        </div>
    )
}

