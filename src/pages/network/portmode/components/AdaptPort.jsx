import React from 'react';
import {Row,Col,Radio,Button} from 'antd'; 
const AdaptPort =(props)=> {
    const RadioGroup = Radio.Group;
    return(
        <div>
            <Row>
                <Col span={8}>网口自适应模式</Col>
                <Col span={12}>
                    <RadioGroup name="dedicate_first_enable" value={props.data.dedicate_first_enable} 
                        onChange={(e)=>props.data.handleValueChange(e)}>
                        <Radio value={1} disabled={props.data.datadisableRadio}>开启</Radio>
                        <Radio value={0}>关闭</Radio>
                    </RadioGroup>
                </Col>
            </Row>
            <Row>
                <Col span={8} />
                <Col span={12}>
                    <Button type="primary" disabled={props.data.disableRadio} onClick={()=> props.saveNetPortCfg()} >保存</Button>
                </Col>
            </Row>
        </div>
    );
};
export default AdaptPort;