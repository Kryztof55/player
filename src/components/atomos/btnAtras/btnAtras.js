import React, {Component} from 'react';

import style from './style.scss';

class BtnAtras extends Component {
    Click(){
        console.log(this)
    }
    render(){
        return (
            <button onClick={() => this.Click()} className="btn btnAtras">
                <i className="material-icons">fast_rewind</i>
            </button>
        );
    }
}
export default BtnAtras;