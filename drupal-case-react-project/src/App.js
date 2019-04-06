import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Carousel from './components/Carousel';
import "./app.css";
import Breadcrumbs from './components/Breadcrumbs';
import Wrapper from './components/Wrapper';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Wrapper>
          <Breadcrumbs mainLink={"/research/about/research-centers-interdisciplinary-institutes"} mainTitle={"Research Centers and Interdisciplinary Institutes"} links={[
            {
              url: "/research",
              title: "Home"
            },
            {
              url: "/research/about",
              title: "About"
            }
          ]} />
          <Carousel />
          <Sidebar />
          <Jumbotron />
        </Wrapper>
      <Footer />
      </div>
    );
  }
}

export default App; 
