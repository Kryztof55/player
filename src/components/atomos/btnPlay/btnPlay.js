import React, {Component} from 'react';
import * as $ from "jquery";
import style from './style.scss';

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
                  xhr.setRequestHeader("Authorization", "Bearer BQAjeLhDlYLXaowvzRhcVMW-PqsZyUbdVuKs5iZ4s2KFEGw9Mx6CVYmbcWvIhE87Xgq6Pe1AlmRkgANUEdlfYOW-zsHSDw4BcpHl4FDZ2Rluw6k__0W6N2bGLfRFYtVm-jFWDsp_59FdjHzLxr0");
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
                  xhr.setRequestHeader("Authorization", "Bearer BQAjeLhDlYLXaowvzRhcVMW-PqsZyUbdVuKs5iZ4s2KFEGw9Mx6CVYmbcWvIhE87Xgq6Pe1AlmRkgANUEdlfYOW-zsHSDw4BcpHl4FDZ2Rluw6k__0W6N2bGLfRFYtVm-jFWDsp_59FdjHzLxr0");
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