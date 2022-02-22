import React, { Component } from 'react';
import Navbar from '../src/components/navbar/index';
import Main from '../src/components/main/index'
import Footer from '../src/components/footer/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
