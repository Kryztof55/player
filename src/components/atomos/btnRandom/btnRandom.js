import React, {Component} from 'react';

import style from './style.scss';

class BtnRandom extends Component {
    render(){
        return (
            <button className="btn btnRandom">
                <i class="material-icons">shuffle</i>
            </button>
        );
    }
}
export default BtnRandom;