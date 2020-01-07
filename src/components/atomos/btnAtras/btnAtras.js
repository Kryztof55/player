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
            <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <button className="btn btnAtras" onClick={(e) => this.before(e, context.state.getCurrent())}>
                                <i className="material-icons">fast_rewind</i>
                            </button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
                
        );
    }
}
export default BtnAtras;