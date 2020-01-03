import React, {Component} from 'react';
import Portada from '../../moleculas/portadas/portadas'
import style from './style.scss';
import Slide from '../../organismos/slide/slide';
import Titulo from '../../atomos/titulo/titulo';
import MyContext from '../../../ApiContext';
import MyProvider from '../../../ApiPlaylist';
class gridPortadas extends Component {
    
    render(){
        return (
            <section className="gridPortadas container">
                <Titulo className="titulo" theme="white" contenido="Listas"/>
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            {context.state.listas.map((lista) => (
                                <p>{lista.name}</p>
                            ))}
                        </React.Fragment>
                    )}
                    
                </MyContext.Consumer>
                <Slide/>
            </section>
        );
    }
}
export default gridPortadas;