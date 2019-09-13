import React from 'react';
import {Modal} from 'antd';
class H3CModal extends React.PureComponent{
    render(){
        return(
            <Modal
                title={this.props.title}
                visible={this.props.visible}
                footer={[]}
                closable={false}
                centered={true}
                keyboard={true}
            >
                <p>{this.props.content}</p>
            </Modal>
        );
    }
}
export default H3CModal;