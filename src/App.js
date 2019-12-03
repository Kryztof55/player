import React, {Component} from 'react';
import './App.css';
import './scss/configurations.scss';
import HeaderRep from './components/moleculas/headerRep/headerRep'


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderRep/>
      </div>
    );
  }
}
export default App;
