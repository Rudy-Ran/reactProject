import React from 'react';
import CarouselItem from './carouselItem.jsx.js';
import './carousel.css';
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                'health': 2,
                'temperature': 1,
                'volatge': 1,
                'current': 1,
                'memory': 2,
                'fans': 1,
                'processor': 0,
                'disk': 0,
                'power': 0,
                'nic': 0,
                'cc': 0
            }
        };
    }
    render() {

        return (
            <div className="status">
                <div className="deviceText">设备存在{this.props.device_count}个问题，请及时处理!</div>
                <ul>
                    <CarouselItem type={'温度'} icons={'icons-temperature-state'} />
                    <CarouselItem type={'电流'} icons={'icons-current-state'} />
                    <CarouselItem type={'电压'} icons={'icons-volatge-state'} />
                </ul>
            </div>
        );
    }
}
export default Carousel;
