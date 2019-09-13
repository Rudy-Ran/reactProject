import React from 'react';
import {Link} from 'react-router-dom';
class CarouselItem extends React.Component{
    render(){
        return(
            <li>
                <Link to="#">
                    <span className={'system-left '+this.props.icons}>
                    </span>
                    <span className="stateText">温度</span>
                </Link>
            </li>
        );
    }
}
export default CarouselItem;