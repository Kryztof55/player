import React, {Component} from 'react';
import style from './style.scss';

class Titulo extends Component {
    render(){
        return (
            <h1 className={this.props.className} color-theme={this.props.theme}>{this.props.contenido}</h1>
        );
    }
}
export default Titulo