import {Modal,notification,message} from "antd";
notification.config({
    placement: 'bottomRight',
    bottom: 50,
    duration: 2,
});
// message.config({
//     top: 300,
//     duration: 2,
//     maxCount: 3,
// });
export const dialog = {
    confirm(content,yes) {
        const {confirm} = Modal;
        confirm({
            title: content,
            content: '',
            centered:true,
            closable:true,
            okText:'确认',
            cancelText:"取消",
            onOk() {
                return yes.call(this);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    },
    warning(content) {
        Modal.warning({
            title: '消息',
            content: content,
            centered:true
        });
    },
    tip(content){
        Modal.warning({
            title: '消息',
            content: content
        });
    },
    notify(type,txt){
        notification[type]({
            message: '失败',
            description:txt,
        });
    },
    // msg(type,content){
    //     message[type](content);
    // }
};
