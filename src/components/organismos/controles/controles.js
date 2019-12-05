import React, {Component} from 'react';
import Img from '../../atomos/img/img'
import Text from '../../atomos/text/text'
import Player from '../../organismos/player/player'

import style from './style.scss';


class Controles extends Component {
    
    verToggle() {
        this.props.classList.toggle('clase')
    }
    render(){
        return (
            <div className="controles">
                <Text className="text display-artist" theme="white" contenido="Nombre del artista"/>
                <Img className="img thumb" ImagenUrl="./assets/img/tum.jpg" ImagenAlt="Proyecto react"/>
                <Text className="text display-cancion" theme="white" contenido="Nombre de la cancion"/>
                <Player/>
                    <button onClick={(e) => this.verToggle(e)}>abajo</button>
            </div>
        );
    }
}
export default Controles;