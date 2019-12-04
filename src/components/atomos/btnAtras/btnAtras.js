import React, {Component} from 'react';

import style from './style.scss';

class BtnAtras extends Component {
    render(){
        return (
            <button className="btn btnAtras">
                <i class="material-icons">fast_rewind</i>
            </button>
        );
    }
}
export default BtnAtras;