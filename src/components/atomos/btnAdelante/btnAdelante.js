import React, {Component} from 'react';
import * as $ from "jquery";
import style from './style.scss';

class BtnAdelante extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
      }
    next(){
        $.ajax({
            url: "https://api.spotify.com/v1/me/player/next",
            type: "POST",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer BQDSNowS9yJ4gl6oVMfyeJ3uNyfGH6YRlTgVon05dk2ye2r_nzXJ5JqgGFqucTgC0YrHMA8Vxhu17OmQbB0znfxtH-b00YMKcUxvfNLe7JwtIgNCP8I1ipdJtCsJ5I6LuAAJ9ERKA7blPjY3qNrkErBj7mHqIrBDWDUVNobnEVkX-y_pVSukuvJMWHcxWHuHw_0O4hHMU4ck-MDmNdd0kRg6iOljsmmyYPRl1W_eGr-s1rt3P34OceY8isWHGNii8qy_UQhDmwvnzg");
            },
            success: (next) => {
                this.setState({

                });
            }
        });

        
    }
    render(){
        return (
            <button className="btn btnAdelante" onClick={(e) => this.next(e)}>
                <i className="material-icons">fast_forward</i>
            </button>
        );
    }
}
export default BtnAdelante;