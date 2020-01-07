import React, {Component} from 'react';
import * as $ from "jquery";
import style from './style.scss';
import MyContext from '../../../ApiPlaylist';

class BtnPlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_pause: false
        };
      }
    pause(){
        if(this.state.is_pause != true){
            console.log(this.state.is_pause)
            $.ajax({
                url: "https://api.spotify.com/v1/me/player/pause",
                type: "PUT",
                beforeSend: (xhr) => {
                  xhr.setRequestHeader("Authorization", "Bearer BQDSNowS9yJ4gl6oVMfyeJ3uNyfGH6YRlTgVon05dk2ye2r_nzXJ5JqgGFqucTgC0YrHMA8Vxhu17OmQbB0znfxtH-b00YMKcUxvfNLe7JwtIgNCP8I1ipdJtCsJ5I6LuAAJ9ERKA7blPjY3qNrkErBj7mHqIrBDWDUVNobnEVkX-y_pVSukuvJMWHcxWHuHw_0O4hHMU4ck-MDmNdd0kRg6iOljsmmyYPRl1W_eGr-s1rt3P34OceY8isWHGNii8qy_UQhDmwvnzg");
                },
                success: (pause) => {
                  this.setState({
                    is_pause : true
                  });
                }
            });
        }
        else{
            $.ajax({
                url: "https://api.spotify.com/v1/me/player/play",
                type: "PUT",
                beforeSend: (xhr) => {
                  xhr.setRequestHeader("Authorization", "Bearer BQDSNowS9yJ4gl6oVMfyeJ3uNyfGH6YRlTgVon05dk2ye2r_nzXJ5JqgGFqucTgC0YrHMA8Vxhu17OmQbB0znfxtH-b00YMKcUxvfNLe7JwtIgNCP8I1ipdJtCsJ5I6LuAAJ9ERKA7blPjY3qNrkErBj7mHqIrBDWDUVNobnEVkX-y_pVSukuvJMWHcxWHuHw_0O4hHMU4ck-MDmNdd0kRg6iOljsmmyYPRl1W_eGr-s1rt3P34OceY8isWHGNii8qy_UQhDmwvnzg");
                },
                success: (play) => {
                  this.setState({
                    is_pause : false
                  });
                }
            });
        }
    }
    render(){
        return (
            <button className="btn btnPlay" onClick={(e) => this.pause(e)}>
              <i className="material-icons">play_arrow</i>
            </button>       
        );
    }
}
export default BtnPlay;