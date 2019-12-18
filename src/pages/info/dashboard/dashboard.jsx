import React, {useEffect} from 'react';
import { useMappedState, useDispatch } from "redux-react-hook";
import Title from '@/common/components/subSection/subSectionTitle.jsx';
import './dashboard.css';
import Status from './components/Status.jsx';
import * as actionCreators from './store/actionCreators.js';
import Info from './components/Info.jsx';
import Session from './components/Session.jsx';
function DashBoard() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionCreators.getData())
      },[]);
    return (
        <div>
            <Title title={'基本状态'} />
            <Status />
            <Title title={'基本信息'} />
            <Info />
            <Title title={'用户会话'} />
            <Session />
        </div>
    )
}
export default DashBoard;

