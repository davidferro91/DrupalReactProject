import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import LogoTop from './components/LogoTop';
import DepartmentHeader from './components/DepartmentHeader';
import Jumbotron from './components/Jumbotron';
import Carousel from './components/Carousel';
import Breadcrumbs from './components/Breadcrumbs';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import API from './utils/API';
import "./app.css";
import axios from 'axios';

class App extends Component {

  seeIfImagesWorks = () => {
    API.getContent()
      .then(result => {
        const imgObject = {
          images: []
        }
        const html = result.data.body[0].processed;
        const element = document.createElement("div");
        element.innerHTML = html;
  
        const imagesToSend = element.getElementsByTagName("img");
        for(let i = 0; i < imagesToSend.length; i++) {
          imagesToSend[i].src.replace()
          imgObject.images.push(imagesToSend[i].src.replace("http://localhost:3000", "http://research.dd:8083"));
        }
        console.log(imgObject);
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/hal+json",
        "Access-Control-Allow-Origin":"http://localhost:3000"
      }
    }
    axios.get("http://research.dd:8083/node/21?_format=hal_json", config)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      this.seeIfImagesWorks();
  }

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
