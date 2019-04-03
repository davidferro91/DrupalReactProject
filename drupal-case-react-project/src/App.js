import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}

export default App;
