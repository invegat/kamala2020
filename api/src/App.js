import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HomeContainer from './components/HomeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Route exact path='/' component= {HomeContainer} />
      </div>
    );
  }
}

export default App;
