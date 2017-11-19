import React, { Component } from 'react';
import './App.css';
import Main from './Views/Main';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
