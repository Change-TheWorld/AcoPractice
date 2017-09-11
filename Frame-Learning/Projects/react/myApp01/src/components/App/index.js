import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My First React-App  --- Aco</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*注释*/}
        <p className="test01">小测试</p>
      </div>
    );
  }
}

export default App;
