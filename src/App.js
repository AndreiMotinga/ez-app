import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      version: ""
    }
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL)
      .then(res => {
        this.setState({
          name: res.data.name,
          version: res.data.version
        });
      })
  }

  render() {
    const url = process.env.REACT_APP_API_URL
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <ul>
            <li>name is {this.state.name}</li>
            <li>v is {this.state.version}</li>
          </ul>
          br
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
