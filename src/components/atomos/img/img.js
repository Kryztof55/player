import React, {Component} from 'react';

import style from './style.scss'

class Imgs extends Component {
    render(){
        return (
            <figure>
                <img className={this.props.className} src={this.props.ImagenUrl} alt={this.props.ImagenAlt}/>
            </figure>
        );
    }
}
export default Imgs