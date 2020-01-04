import React, {Component} from 'react';
import * as $ from "jquery";
import MyContext from '../../../ApiContext'
import MyProvider from '../../../ApiPlaylist';
import style from './style.scss';

class BtnAtras extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
      }
    before(){
        $.ajax({
            url: "https://api.spotify.com/v1/me/player/previous",
            type: "POST",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer BQAjeLhDlYLXaowvzRhcVMW-PqsZyUbdVuKs5iZ4s2KFEGw9Mx6CVYmbcWvIhE87Xgq6Pe1AlmRkgANUEdlfYOW-zsHSDw4BcpHl4FDZ2Rluw6k__0W6N2bGLfRFYtVm-jFWDsp_59FdjHzLxr0");
            },
            success: (next) => {
                this.setState({

                });
            }
        });

        
    }
    render(){
        return (
            <React.Fragment>
                <button className="btn btnAtras" onClick={(e) => this.before(e)}>
                    <i className="material-icons">fast_rewind</i>
                </button>

{/*                 <button className="btn btnAtras" onClick={window.test()}>
                    click test
                </button> */}
                
            </React.Fragment>
        );
    }
}
export default BtnAtras;