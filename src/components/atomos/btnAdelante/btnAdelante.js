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
                xhr.setRequestHeader("Authorization", "Bearer BQC3SFy_eNy0L5Tllz1NvnNtl7MiA9mWJ4z3HdoW2xvc6aDKSrFWfHqsJ9sBR7Ttai2pXtMpf2DMSmaXDb-b-_DU--SPW35l8fmlFm_JkzG1qtEc6yAT3QcQcr4UrjfIDF8a_NawX7ev7SWXsZe7LAVmieEoX3_22WsxZG55jFIgCAEZ5n7OKNNUaewi1O5Pl5lY9UVtd4qlae-gWezevGQu-xbnHYCZbdC9rQxgXMXahSGbAi5sV4-cCyGTHet66l-P23nRKpAwHA");
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