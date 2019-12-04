import React, {Component} from 'react';
import Jumbotron from '../jumbotron/jumbotron';
import Buscador from '../../atomos/buscador/buscador';

import style from './style.scss';

class HeaderBuscador extends Component {
    render(){
        return (
            <div className="headBuscador">
                <Jumbotron>
                    <Buscador color="white"/>
                </Jumbotron>
            </div>
        );
    }
}
export default HeaderBuscador;