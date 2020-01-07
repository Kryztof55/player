import React, {Component} from 'react';


import style from './style.scss'

class Buscador extends Component {
    render(){
        return (
            <React.Fragment>
                <input className="buscador" type="search" name="buscador" color={this.props.color} placeholder="Buscar música..."/>
            </React.Fragment>
        );
    }
}
export default Buscador