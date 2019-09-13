import React from 'react';
import './subSection.css';
class Title extends React.Component {
    render() {
        return (
            <div className="subSection-title">
                {this.props.title}
            </div>
        );
    }
}
export default Title;