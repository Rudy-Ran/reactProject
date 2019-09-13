import React from 'react';
import {Row,Col,Button} from 'antd';
import Title from "@/common/components/subSection/subSectionTitle.jsx";
import ProgressBar from './component/Progress.jsx';
import './resource.css';
class Resource extends React.Component{
    constructor(props){
        super(props);
    }
    showAdvancedSetting(){
        //展现高级设置Modal框
    }
    render(){
        return(
            <div className="resource">
                <Row>
                    <h3>系统资源监控</h3>
                </Row>
                <Row>
                </Row>
                <Title title={'CPU占用率'}/>
                <Row>
                    <Col span={12}>
                        <ProgressBar/>
                    </Col>
                    <Col span={8}>{30}%</Col>
                </Row>
                <Title title={'内存占用率'}/>
                <Row>
                    <Col span={12}>系统内存容量{2}GB</Col>
                </Row>
                <Row>
                    <Col span={12}>

                    </Col>
                </Row>
                <Title title={'磁盘占用率'}/>

                <Row>
                    <Col span={12}>

                    </Col>
                </Row>
            </div>

        );
    }
} 
export default Resource;
