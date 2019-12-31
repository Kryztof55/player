import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyContext from './ApiContext'

class MyProvider extends Component{
    state = {
        name: "Christopher",
        age : 35,
        estudia: "react.js"
    }
    getPlayList(){
        
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