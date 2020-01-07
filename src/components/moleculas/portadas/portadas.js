import React, {Component} from 'react';

import * as $ from "jquery";
import Img from '../../atomos/img/img';
import Text from '../../atomos/text/text';
import style from './style.scss';
import MyContext from '../../../ApiContext';
import MyProvider from '../../../ApiPlaylist';
class Portadas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : 0
        }
    }

    tracks(context){
        
        
            
    }
    render(){
        return (
            <MyContext.Consumer>
                {(context) => (
                <li className="item" onClick={() => {
                    console.log("function" + this.state)
                    const id = context.state.listas[0].id;

                    $.ajax({
                        url: "https://api.spotify.com/v1/playlists/"+id+"/tracks",
                        type: "GET",
                        beforeSend: (xhr) => {
                          xhr.setRequestHeader("Authorization", "Bearer BQC3SFy_eNy0L5Tllz1NvnNtl7MiA9mWJ4z3HdoW2xvc6aDKSrFWfHqsJ9sBR7Ttai2pXtMpf2DMSmaXDb-b-_DU--SPW35l8fmlFm_JkzG1qtEc6yAT3QcQcr4UrjfIDF8a_NawX7ev7SWXsZe7LAVmieEoX3_22WsxZG55jFIgCAEZ5n7OKNNUaewi1O5Pl5lY9UVtd4qlae-gWezevGQu-xbnHYCZbdC9rQxgXMXahSGbAi5sV4-cCyGTHet66l-P23nRKpAwHA" );
                        },
                        success: (data) => {
                          console.log(data.items)
                          //non funciona setState is not a function this.setState({})
                          
                        }
                      });
                }}>
                    <div>
                        <article className="portadas">
                            <Img className="img thumb" ImagenUrl={this.props.mainImage} ImagenAlt="Proyecto react"/>
                            <Text className="text display-cancion" theme="white" contenido={this.props.mainName}/>
                            <Text className="text display-artist" theme="white" contenido={this.props.mainDescription}/>
                        </article>
                    </div>
                </li>
                )}
            </MyContext.Consumer>
        );
    }
}
export default Portadas