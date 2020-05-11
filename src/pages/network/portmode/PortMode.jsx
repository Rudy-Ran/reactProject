import React, { useEffect } from 'react';
import Title from "@/common/components/subSection/subSectionTitle.jsx";
import { dialog } from '@/utils/h3c.dialog.js';
import * as actionCreators from './store/actionCreators.js';
import { connect } from 'react-redux';
import H3CModal from '@/common/components/Modal/H3CModal.jsx';
import { Row, Col, Radio, Button, Modal, Spin, Alert } from 'antd';
const PortMode = props => {
    const RadioGroup = Radio.Group;
    const { showWait, modalVisible, modalContent, portMode, initData } = props;
    const { getPortModeDataDispatch, handleSaveNetPortCfg } = props;
    const portModeJS = portMode ? portMode.toJS() : {};
    useEffect(() => {
        getPortModeDataDispatch();
    }, []);
    const saveNetPortCfg = data => {
        if (initData.get('port_mode') === data) {
            dialog.notify('error', '网口自适应模式配置未发生变化');
        } else {
            dialog.confirm('HDM将重置，浏览器会话会失去连接。确认是否要修改网口自适应模式配置？', function () {
                handleSaveNetPortCfg(data);
            });
        }
    }
    return (
        <Spin size="large" spinning={showWait}>
            <H3CModal visible={modalVisible} content={modalContent} />
            <Alert message="开启网口自适应模式后，HDM会优先使用专用网口进行网络通信，在专用网口未连接时，会自动跳转到共享网口" type="info" showIcon />
            <Title title="网口模式" />
            <div>
                <Row>
                    <Col span={8}>选择模式</Col>
                    <Col span={12}>
                        <RadioGroup name="bond_enable" value={portModeJS.port_mode}
                            onChange={(e) => props.handleValueChange(e)}>
                            <Radio value={0} >正常模式</Radio>
                            <Radio value={1} >Bonding模式</Radio>
                            <Radio value={2} >网口自适应模式</Radio>
                        </RadioGroup>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} />
                    <Col span={12}>
                        <Button type="primary" onClick={() => saveNetPortCfg(portModeJS.port_mode)}>保存</Button>
                    </Col>
                </Row>
            </div>
        </Spin>
    );
}
const mapStateToProps = state => {
    return {
        showWait: state.getIn(['common', 'showWait']),
        modalVisible: state.getIn(['common', 'modalVisible']),
        modalContent: state.getIn(['common', 'modalContent']),
        portMode: state.getIn(['portmode', 'portMode']),
        initData: state.getIn(['portmode', 'initData'])
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getPortModeDataDispatch() {
            dispatch(actionCreators.getPortMode());
        },
        handleValueChange(e) {
            dispatch(actionCreators.valueChange(e.target.name, e.target.value));
        },
        handleSaveNetPortCfg(data) {
            let params = {
                port_mode: data
            };
            dispatch(actionCreators.saveNetPortCfg(params));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PortMode);