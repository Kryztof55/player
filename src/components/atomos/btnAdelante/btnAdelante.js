import React, {Component} from 'react';

import style from './style.scss';

class BtnAdelante extends Component {
    render(){
        return (
            <button className="btn btnAdelante">
                <i className="material-icons">fast_forward</i>
            </button>
        );
    }
}
export default BtnAdelante;