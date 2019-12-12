import React, {Component} from 'react';
import Img from '../../atomos/img/img'
import Text from '../../atomos/text/text'
import Player from '../../organismos/player/player'

import style from './style.scss';


const Controles = props => {
    /* verToggle() {
        console.log(this._reactInternalFiber.child.stateNode.classList);
        this._reactInternalFiber.child.stateNode.classList.toggle("open")
    } */
    const progressBarStyles = props.progress_ms
    

        return (
            <div className="controles">
                <Text className="text display-artist" theme="white" contenido={props.item.artists[0].name}/>
                <Text className="text display-artist" theme="white" contenido={props.item.album.name}/>
                <Img className="img thumb" ImagenUrl={props.item.album.images[0].url} ImagenAlt="Proyecto react"/>
                <Text className="text display-cancion" theme="white" contenido={props.item.name}/>
                {console.log(progressBarStyles)}
                <Player/>
                {/* <button onClick={(e) => verToggle(e)}>abajo</button> */}
            </div>
        );
    
}
export default Controles;