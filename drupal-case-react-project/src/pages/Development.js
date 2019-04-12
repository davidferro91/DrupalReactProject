import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import LogoTop from './components/LogoTop';
import DepartmentHeader from './components/DepartmentHeader';
import Jumbotron from './components/Jumbotron';
import Carousel from './components/Carousel';
import Breadcrumbs from './components/Breadcrumbs';
import Table from './components/Table';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';

import "./app.css";

class App extends Component {
  render() {
    return (
      <div>
        <LogoTop />
        <DepartmentHeader />
        <Navbar />
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
          <Carousel
            image1="image1link"
            image2="image2link"
            image3="image3link"
            header="headercontent"
            subheader="subheadercontent"
          />
          <Sidebar />
          <Jumbotron />
          <Table 
            tabletitle="tabletitle"
            tablesubtitle="tablesubtitle"
            tabledata
          />
        </Wrapper>
      <Footer />
      </div>
    );
  }
}

export default App; 