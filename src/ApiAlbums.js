import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash.js";
import MyContext from './ApiContext'


class MyProviderAlbums extends Component{
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            albums : [{}]
        }
        this.getAlbums = this.getAlbums.bind(this);
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
  
      getAlbums(token) {
        // Make a call using the token
        $.ajax({
          url: "https://api.spotify.com/v1/albums",
          type: "GET",
          beforeSend: (xhr) => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
          },
          success: (res) => {
            console.log("data desde Albums", res);
            this.setState({albums: res.albums});
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
export default MyProviderAlbums;