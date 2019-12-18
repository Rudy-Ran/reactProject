import React,{useEffect,useCallback } from 'react';
import {useMappedState,useDispatch} from 'redux-react-hook';
import '../style.css';
import * as actionCreators from '@/common/store/actionCreators.js';
const NavTop  = props=>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionCreators.getUIDStatus());
        dispatch(actionCreators.getPowerStatus())
    },[]);

    const mapState = useCallback(
        state => ({
            uidStatus:state.getIn(['common','uidStatus','status']),
            powerStatus:state.getIn(['common','powerStatus','power_status']),
        }),
    );
    const { uidStatus, powerStatus} = useMappedState(mapState);
    let uidClass;
    if(uidStatus === 0){
        uidClass = 'uid-icon-off';
    }else if(uidStatus === 1){
        uidClass = 'uid-icon-on';
    }else {
        uidClass = 'uid-icon-twink';
    }
    return(
        <div>
        <ul className="headerWrapper">
            <li><span className="icons-exit" onClick={()=>handleLoginOut()}></span></li>
            <li><span className="icons-lang-en"></span></li>
            <li><span className="icon-message"></span></li>
            <li><span className={uidClass}></span></li>
            <li><span ></span></li>
            <li><span className="line">|</span></li>
            <li><span className="username">admin</span></li>
            <li><span className="icons-user"></span></li>
        </ul>
    </div>
    )
}
export default NavTop;

// const mapDispatchToProps = dispatch =>{
//     return{
//         handleLoginOut(){
//             dispatch(actionCreators.changeLoginStatus(false));
//         },
//     };
// };
// export default connect(mapStateToProps,mapDispatchToProps)(NavTop);
