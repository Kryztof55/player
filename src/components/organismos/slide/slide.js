import React, {Component} from 'react';
import Portadas from '../../moleculas/portadas/portadas'


import style from './style.scss';

class Slide extends Component {
    render(){
        return (
            <div className="slide">
                <div className="contenedor">
                    <ul>
                        <Portadas className="card"/>
                        <Portadas className="card"/>
                        <Portadas className="card"/>
                        <Portadas className="card"/>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Slide;