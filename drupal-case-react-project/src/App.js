import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
