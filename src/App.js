import React, { Component } from 'react';
import CharacterBuilder from './Components/CharacterBuilder';
import Wobble from './Components/Test/Wobble';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CharacterBuilder />
        <Wobble />
      </div>
    );
  }
}

export default App;
