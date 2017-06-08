import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MatchList from './MatchList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to League History</h2>
        </div>
        <p className="App-intro">
          Here is the list of matches, with people you've played with
        </p>
        <MatchList className="vacant" isVacant='true'/>
      </div>
    );
  }
}

export default App;
