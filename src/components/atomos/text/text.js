import React, {Component} from 'react';
import style from './style.scss';

class Text extends Component {
    render(){
        return (
            <p className={this.props.className} color-theme={this.props.theme}>{this.props.contenido}</p>
        );
    }
}
export default Text