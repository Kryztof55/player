import React, {Component} from 'react';


import Img from '../../atomos/img/img';
import Text from '../../atomos/text/text';
import style from './style.scss';

class Portadas extends Component {
    render(){
        return (
            
            <li className="item">
                <div>
                    <article className="portadas">
                        <Img className="img thumb" ImagenUrl="" ImagenAlt="Proyecto react"/>
                        <Text className="text display-cancion" theme="white" contenido="Nombre de banda"/>
                        <Text className="text display-artist" theme="white" contenido="Nombre del disco"/>
                    </article>
                </div>
            </li>
        );
    }
}
export default Portadas