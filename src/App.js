import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import icon from './iconoteka/Arrows/iconoteka_3d_rotation_b_s.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <img src={icon} alt="icon" style={{ width: '100px', height: '100px' }} />
        </p>
      </div>
    );
  }
}

export default App;
