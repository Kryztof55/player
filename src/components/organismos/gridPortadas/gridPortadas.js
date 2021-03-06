import React, {Component} from 'react';
import Portadas from '../../moleculas/portadas/portadas'
import style from './style.scss';
import Slide from '../../organismos/slide/slide';
import Titulo from '../../atomos/titulo/titulo';
import MyContext from '../../../ApiContext';
import MyProvider from '../../../ApiPlaylist';
import * as $ from "jquery";
class gridPortadas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render(){
        return (
            <section className="gridPortadas container">
                <Titulo className="titulo" theme="white" contenido="Listas de reporducción"/>
                <Slide>
                    <MyContext.Consumer>
                            {(context) => (
                                <React.Fragment>
                                    {context.state.listas.map((lista,index, id) => (
                                        <Portadas key={index} className="card" mainImage={lista.images[0].url} mainDescription={lista.tracks.total + " Canciones"} mainName={lista.name}/>
                                    ))}
                                </React.Fragment>
                            )}          
                    </MyContext.Consumer>
                 </Slide>
            </section>
        );
    }
}
export default gridPortadas;