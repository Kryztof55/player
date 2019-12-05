import React, {Component} from 'react';
import BtnAdelante from '../../atomos/btnAdelante/btnAdelante'
import BtnAtras from '../../atomos/btnAtras/btnAtras'
import BtnRandom from '../../atomos/btnRandom/btnRandom'
import BtnPlay from '../../atomos/btnPlay/btnPlay'

import style from './style.scss';

class Player extends Component {
    render(){
        return (
            <div className="player">
                <BtnRandom/>
                <BtnAtras/>
                <BtnPlay/>
                <BtnAdelante/>
            </div>
        );
    }
}
export default Player;