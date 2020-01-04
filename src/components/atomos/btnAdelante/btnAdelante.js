import React, {Component} from 'react';
import * as $ from "jquery";
import style from './style.scss';

class BtnAdelante extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
      }
    next(){
        $.ajax({
            url: "https://api.spotify.com/v1/me/player/next",
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
            <button className="btn btnAdelante" onClick={(e) => this.next(e)}>
                <i className="material-icons">fast_forward</i>
            </button>
        );
    }
}
export default BtnAdelante;