import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumbs  mainLink={"/research/about/research-centers-interdisciplinary-institutes"} mainTitle={"Research Centers and Interdisciplinary Institutes"} links={[
          {
            url: "/research",
            title: "Home"
          },
          {
            url: "/research/about",
            title: "About"
          }
          ]}  />
        <Sidebar />
      </div>
    );
  }
}

export default App;
