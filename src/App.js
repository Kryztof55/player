import React, {Component} from 'react';
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash.js";

import './App.css';
import './scss/configurations.scss';
import HeaderRep from './components/moleculas/headerRep/headerRep';
import HeaderBuscador from './components/moleculas/headBuscador/headBuscador';
import Controles from './components/organismos/controles/controles';
import GridPortadas from './components/organismos/gridPortadas/gridPortadas';


class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms:0,
      },
      is_playing: "Paused",
      progress_ms: 0
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        console.log("data", data);
        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
        });
      }
    });

  }
  render() {
    return (
      <div className="App">
        {!this.state.token && (
            <a
              className=""
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
              Iniciar Spotify
            </a>
          )}
        {this.state.token && (
            <div>
              <HeaderRep/>
              <HeaderBuscador/>
              <Controles item={this.state.item} is_playing={this.state.is_playing} progress_ms={this.progress_ms} />
              <hr/>
              <GridPortadas />
            </div>
          )}
        
      </div>
    );
  }
}
export default App;


/* Autenticacion spotify */