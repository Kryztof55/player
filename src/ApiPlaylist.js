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
            token: null,
            listas : [],
            albums : [],
            pause : false,
            item: {
              album: {
                images: [{ url: "" }]
              },
              name: "",
              artists: [{ name: "" }],
              duration_ms:0,
            },
            items: {
              images: [{ url: "" }]
    
            },
            is_playing: "Paused",
            progress_ms: 0,
            
            showModal(){
                console.log("show Modal")
                const body = document.body
                const modal = document.getElementsByClassName("modal")
                for (var i = 0; modal.length > i; i ++){
                  modal[i].className +=" show"
                }
                if(!body.classList.contains("modal-open")){
                  document.body.className = "modal-open"
                  const back = document.createElement("div")
                  back.className = "background"
                  document.body.appendChild(back)
                }
                else {
                  document.body.classList.remove("modal-open")
                  const back = document.getElementsByClassName('background')
                  back[0].remove()
                }
            },
            getCurrent() {
              
              $.ajax({
                url: "https://api.spotify.com/v1/me/player/currently-playing",
                type: "GET",
                beforeSend: (xhr) => {
                  xhr.setRequestHeader("Authorization", "Bearer BQBL5V3x7G7Wr52y4Xs56sUMR7zYQ63BuPQ1eUGv09-MpF5vtC2BF1M4F3vwSAJoil3bA497ONmdcEx43MEXudTzyNFhAjqz-8Dpq5vP13P_ljWfy3Yz0zuP42SU_FqQ8eA4OX9rB3sgLO4jrZO8ogogTWzHnwyvodipqZgGdqU-Qeslrjjp64DjrX0Kbs0aXt4D4yOlNYIoaMgDEO6FmK25_QU7NSXKgR4iCKdByXOrgdov8HSo4M2vwsnnSFadJQkLig4tO2Diqg" );
                },
                success: (data) => {
                  console.log(this.props)
                  //non funciona setState is not a function this.setState({})
                  
                }
              });
            }
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
          success: (res) => {
            console.log("data desde playlist", res.items);
            this.setState({listas: res.items});
          }
        });
        $.ajax({
          url: "https://api.spotify.com/v1/albums?ids=41MnTivkwTO3UUJ8DrqEJJ%2C6JWc4iAiJ9FjyK0B59ABb4%2C6UXCm6bOO4gFlDQZV5yL37",
          type: "GET",
          beforeSend: (xhr) => {
            xhr.setRequestHeader("Authorization", "Bearer " + token );
          },
          success: (resAlbums) => {
            console.log("data desde Albums", resAlbums);
            this.setState({albums: resAlbums.albums});
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