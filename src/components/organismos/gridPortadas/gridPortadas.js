import React, {Component} from 'react';
import Portada from '../../moleculas/portadas/portadas'
import style from './style.scss';
import Slide from '../../organismos/slide/slide';
import Titulo from '../../atomos/titulo/titulo';
import MyContext from '../../../ApiPlaylist';

class gridPortadas extends Component {
    
    render(){
        return (
            <section className="gridPortadas container">
                <Titulo className="titulo" theme="white" contenido="contenido"/>
                {/* <MyContext.Consumer>
                    {(context) => (
                        <p>I'm Inside</p>
                    )}
                </MyContext.Consumer> */}
                <Slide/>
            </section>
        );
    }
}
export default gridPortadas;