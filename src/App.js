import React, {Component} from 'react';
import './App.css';
import './scss/configurations.scss';
import HeaderRep from './components/moleculas/headerRep/headerRep';
import HeaderBuscador from './components/moleculas/headBuscador/headBuscador';
import Controles from './components/organismos/controles/controles';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderRep/>
        <HeaderBuscador/>
        <Controles />
      </div>
    );
  }
}
export default App;
