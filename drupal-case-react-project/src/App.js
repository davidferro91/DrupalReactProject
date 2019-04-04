import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import "./app.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <Sidebar />
      </div>
    );
  }
}

export default App;
