import React from 'react';
import { connect } from "react-redux";
import { Row, Col, Radio, Input, Button } from "antd";
import * as actionCreators from '../store/actionCreators.js';
import { clearErrorStatus, changeErrorStatus } from '@/common/store/actionCreators.js';
import { isHostName } from '@/utils/common.js';
import { dialog } from '@/utils/h3c.dialog.js';
const HostNameCfg = props => {
    const { hostData, error } = props;
    const { handleValueChange, handleChangeErrorStatus } = props;
    const RadioGroup = Radio.Group;
    const saveHostNameData = (data) => {
        if (validateHostNameData(data)) {
            dialog.confirm('浏览器会话将失去连接。确认是否要修改主机名配置?', function () {
            });
        }
    }
    const validateHostNameData = data => {
        if (data.host_config === 0 && !isHostName(data.host_name)) {
            handleChangeErrorStatus('host', 'hostError', true);
            return false;
        } else {
            handleChangeErrorStatus('host', 'hostError', false);
        }
        return true;
    }
    return (
        <div>
            <Row>
                <Col span={8}>主机设置</Col>
                <Col span={12}>
                    <RadioGroup name="host_config" value={hostData.get('host_config')}
                        onChange={(e) => handleValueChange(e)} >
                        <Radio value={0}>手动</Radio>
                        <Radio value={1}>自动</Radio>
                    </RadioGroup>
                </Col>
            </Row>
            <Row>
                <Col span={8}>主机名</Col>
                <Col span={6}>
                    <Input name="host_name" value={hostData.get('host_name')} disabled={hostData.get('host_config') ? true : false}
                        className={error.get('hostError') ? 'error-input' : ''}
                        onChange={(e) => handleValueChange(e)} />
                </Col>
                <Col span={2} className={error.get('hostError') ? 'error' : 'hide'}>
                    无效的主机名
                    </Col>
            </Row>
            <Row>
                <Col span={8} />
                <Col span={12}>
                    <Button type="primary" onClick={() => saveHostNameData(hostData)}>保存</Button>
                </Col>
            </Row>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        hostData: state.getIn(['dns', 'hostData']),
        error: state.getIn(['common', 'error', 'host'])
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleValueChange(e) {
            dispatch(actionCreators.hostValueChange(e.target.name, e.target.value));
            if (e.target.name === 'host_config' && e.target.value === 1) {
                dispatch(clearErrorStatus('host'));
            }
        },
        handleChangeErrorStatus(component, key, value) {
            dispatch(changeErrorStatus(component, key, value));
        },
        handleSaveHostData() {
            dispatch(actionCreators.saveHostName());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(HostNameCfg));