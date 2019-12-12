import React, {Component} from 'react';
import Portada from '../../moleculas/portadas/portadas'
import style from './style.scss';
import Slide from '../../organismos/slide/slide';
import Titulo from '../../atomos/titulo/titulo';

class gridPortadas extends Component {
    
    render(){
        return (
            <section className="gridPortadas container">
                <Titulo className="titulo" theme="white" contenido="Discos"/>
                <Slide/>
            </section>
        );
    }
}
export default gridPortadas;