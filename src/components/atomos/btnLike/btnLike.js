import React, {Component} from 'react';

import style from './style.scss';

class BtnLike extends Component {
    render(){
        return (
            <button className="btnLike">
                <i className="material-icons">star</i>
            </button>
        );
    }
}
export default BtnLike;