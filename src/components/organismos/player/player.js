import React, {Component} from 'react';
import BtnAdelante from '../../atomos/btnAdelante/btnAdelante'
import BtnAtras from '../../atomos/btnAtras/btnAtras'
import BtnRandom from '../../atomos/btnRandom/btnRandom'
import BtnLike from '../../atomos/btnLike/btnLike'
import BtnPlay from '../../atomos/btnPlay/btnPlay'
import MyContext from '../../../ApiContext';
import MyProvider from '../../../ApiPlaylist';


import style from './style.scss';

class Player extends Component {
    
    render(){
        return (
            <div className="player">
                <BtnRandom/>
                <BtnAtras />
                <BtnPlay/>
                <BtnAdelante/>
                <BtnLike/>
            </div>
        );
    }
}
export default Player;