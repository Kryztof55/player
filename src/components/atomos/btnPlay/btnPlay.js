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
                  xhr.setRequestHeader("Authorization", "Bearer BQC3SFy_eNy0L5Tllz1NvnNtl7MiA9mWJ4z3HdoW2xvc6aDKSrFWfHqsJ9sBR7Ttai2pXtMpf2DMSmaXDb-b-_DU--SPW35l8fmlFm_JkzG1qtEc6yAT3QcQcr4UrjfIDF8a_NawX7ev7SWXsZe7LAVmieEoX3_22WsxZG55jFIgCAEZ5n7OKNNUaewi1O5Pl5lY9UVtd4qlae-gWezevGQu-xbnHYCZbdC9rQxgXMXahSGbAi5sV4-cCyGTHet66l-P23nRKpAwHA");
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
                  xhr.setRequestHeader("Authorization", "Bearer BQC3SFy_eNy0L5Tllz1NvnNtl7MiA9mWJ4z3HdoW2xvc6aDKSrFWfHqsJ9sBR7Ttai2pXtMpf2DMSmaXDb-b-_DU--SPW35l8fmlFm_JkzG1qtEc6yAT3QcQcr4UrjfIDF8a_NawX7ev7SWXsZe7LAVmieEoX3_22WsxZG55jFIgCAEZ5n7OKNNUaewi1O5Pl5lY9UVtd4qlae-gWezevGQu-xbnHYCZbdC9rQxgXMXahSGbAi5sV4-cCyGTHet66l-P23nRKpAwHA");
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