import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

class MyProvider extends Component{
    state = {
        name: "Christopher",
        age : 35,
        estudia: "react.js"
    }
    render(){
        return(
            <MyContext.Provider value="any Value here">
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider;