import React, {Component} from 'react';

import style from './style.scss';

class BtnPlay extends Component {
    render(){
        return (
            <button className="btn btnPlay">
                <i className="material-icons">play_arrow</i>
            </button>
        );
    }
}
export default BtnPlay;