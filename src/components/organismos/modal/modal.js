import React, {Component} from 'react';
import style from './style.scss';

class Modal extends Component {
    hideModal(){
        console.log(this)
        this._reactInternalFiber.child.stateNode.classList.remove("show")
        const back = document.getElementsByClassName("background")
        for(var i = 0; back.length > i; i ++){
            back[i].remove()
        }
        document.body.classList.remove("modal-open")

    }
    render(){
        return(
            <div className={this.props.className}>
                {this.props.children}
                <header className="header-modal">
                    <h5 className="modal-title">{ this.props.title}</h5>
                    <button onClick={(e) => this.hideModal(e)}>
                        <i className="material-icons">highlight_off</i>
                    </button>       
                </header>
                <div className="modal-body">Contenido del modal</div>
                <div className="modal-footer">Footer</div>
            </div>
        )
    }
}
export default Modal;