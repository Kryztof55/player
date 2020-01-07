import React, {Component} from 'react';

import * as $ from "jquery";
import Img from '../../atomos/img/img';
import Text from '../../atomos/text/text';
import style from './style.scss';
import MyContext from '../../../ApiContext';
import MyProvider from '../../../ApiPlaylist';
import Modal from '../../organismos/modal/modal'

class Portadas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : 0,
            tracks : []
        }

    }
    
    render(){
        return (
            <React.Fragment>

              <MyContext.Consumer>
                  {(context) => (
                  <li className="item" onClick={() => {
                      console.log("function" + this.state)
                      const id = context.state.listas[0].id;
                      
                      context.state.showModal()
                      $.ajax({
                          url: "https://api.spotify.com/v1/playlists/"+id+"/tracks",
                          type: "GET",
                          beforeSend: (xhr) => {
                            xhr.setRequestHeader("Authorization", "Bearer BQDSNowS9yJ4gl6oVMfyeJ3uNyfGH6YRlTgVon05dk2ye2r_nzXJ5JqgGFqucTgC0YrHMA8Vxhu17OmQbB0znfxtH-b00YMKcUxvfNLe7JwtIgNCP8I1ipdJtCsJ5I6LuAAJ9ERKA7blPjY3qNrkErBj7mHqIrBDWDUVNobnEVkX-y_pVSukuvJMWHcxWHuHw_0O4hHMU4ck-MDmNdd0kRg6iOljsmmyYPRl1W_eGr-s1rt3P34OceY8isWHGNii8qy_UQhDmwvnzg" );
                          },
                          success: (data) => {
                            console.log(data.items[0].track.name)
                            //no funciona setState is not a function 
                            this.setState({tracks: data.tracks})
                            
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
            </React.Fragment>
        );
    }
}
export default Portadas