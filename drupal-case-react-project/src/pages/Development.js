import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar'
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Jumbotron from '../components/Jumbotron';
// import Carousel from '../components/Carousel';
import Breadcrumbs from '../components/Breadcrumbs';
import Table from '../components/Table';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import { TextCard, ImageCard } from '../components/Cards';
import "../app.css";

class Development extends Component {
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
          <TextCard name="Test" linkName="Test Link" link="/about">
          This is a test of the textcard.

          </TextCard>
          <ImageCard>

          </ImageCard>
          {/* <Carousel
            image1="image1link"
            image2="image2link"
            image3="image3link"
            header="headercontent"
            subheader="subheadercontent"
          /> */}
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

export default Development; 