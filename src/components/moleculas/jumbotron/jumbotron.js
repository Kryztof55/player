import React, {Component} from 'react';
import style from './style.scss';

class Jumbotron extends Component {
    render(){
        return (
            <div className="jumbotron" color-theme="white">{this.props.children}</div>
        );
    }
}
export default Jumbotron