import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AboutMe />
      </div>
    );
  }
}

export default App;
