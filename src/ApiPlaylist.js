import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash.js";
import MyContext from './ApiContext'

class MyProvider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items : [
                { "name" : ""},
            ]
    
        }
        this.getPlayList = this.getPlayList.bind(this);
    }

      componentDidMount() {
        // Set token
        
        let _token = hash.access_token;
  
        if (_token) {
          // Set token
          this.setState({
            token: _token
          });
          this.getPlayList(_token);
        }
        
      }
  
      getPlayList(token) {
        // Make a call using the token
        $.ajax({
          url: "https://api.spotify.com/v1/me/playlists",
          type: "GET",
          beforeSend: (xhr) => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
          },
          success: (data) => {
            console.log("data desde playlist", data.items);
            this.setState({
                items: data.items
            });
          }
        });
      }
    render(){
        return(
            <MyContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider;