import React, {Component} from 'react';

import style from './style.scss';

class BtnRandom extends Component {
    render(){
        return (
            <button className="btnRandom">
                <i className="material-icons">shuffle</i>
            </button>
        );
    }
}
export default BtnRandom;