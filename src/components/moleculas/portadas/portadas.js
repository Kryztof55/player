import React, {Component} from 'react';


import Img from '../../atomos/img/img';
import Text from '../../atomos/text/text';
import style from './style.scss';
import MyContext from '../../../ApiContext';
class Portadas extends Component {
    render(){
        return (
            <li className="item">
                <div>
                    <article className="portadas">
                        <Img className="img thumb" ImagenUrl={this.props.mainImage} ImagenAlt="Proyecto react"/>
                        <Text className="text display-cancion" theme="white" contenido={this.props.mainName}/>
                        <Text className="text display-artist" theme="white" contenido={this.props.mainDescription}/>
                    </article>
                </div>
            </li>
        );
    }
}
export default Portadas