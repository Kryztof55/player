import React, {Component} from 'react';
import Imgs from '../../atomos/img/img';
import Titulo from '../../atomos/titulo/titulo';
import style from './style.scss';

class HeaderRep extends Component {
    render(){
        return (
            <nav className="nav-rep">
                <Imgs className="logo" ImagenUrl="./assets/img/logo192.png" ImagenAlt="Proyecto react"/>
                <Titulo className="titulo" theme="white" contenido="Kryztof player"/>
            </nav>
        );
    }
}
export default HeaderRep;