import React, {Component} from 'react';
import Portadas from '../../moleculas/portadas/portadas'
import MyContext from '../../../ApiContext';

import style from './style.scss';

class Slide extends Component {
    render(){
        return (
            <div className="slide">
                <div className="contenedor">
                    <ul>
                        {this.props.children}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Slide;