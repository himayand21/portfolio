import React, { Component } from 'react';
import './App.css';
import {Home} from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  render() {
    AOS.init()
    return (
      <Home />
    );
  }
}

export default App;
