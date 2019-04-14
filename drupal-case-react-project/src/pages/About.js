import React, { Component } from 'react';
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import Breadcrumbs from '../components/Breadcrumbs';
import { Container, Row, Col } from '../components/Grid';
import Sidebar from '../components/Sidebar';
import { TextHolder, ImageHolder } from '../components/Holders';
import Loader from '../components/Loader';
import API from '../utils/API';
import Footer from '../components/Footer';
import '../app.css';

class About extends Component {

  state = {
    results: [],
    images: [],
    error: "",
    title: "",
    content: []
  }

  componentDidMount() {
    this.loadContent();
    this.loadImages();
  }

  loadContent = () => {
    API.getContent("21")
      .then(res => {
        const contentObject = {
          content: []
        };
        const html = res.data.body[0].processed;
        const element = document.createElement("div");
        element.innerHTML = html;

        const contentToSend = element.getElementsByTagName("p");
        for (let i = 0; i < contentToSend.length; i++) {
          contentObject.content.push(contentToSend[i]);
        }
        this.setState({ results: res.data });
        this.setState({ title: res.data.title[0].value });
        this.setState({ content: contentObject });
        // console.log(this.state.results);
        console.log(this.state.content);
      })
      .catch(err => this.setState({ error: err }));
  }

  loadImages = () => {
    API.getContent("21")
      .then(res => {
        const imgObject = {
          images: []
        };
        const html = res.data.body[0].processed;
        const element = document.createElement("div");
        element.innerHTML = html;

        const imagesToSend = element.getElementsByTagName("img");
        for (let i = 0; i < imagesToSend.length; i++) {
          let oneImage = {
            src: imagesToSend[i].src.replace("http://localhost:3000", "http://research.dd:8083"),
            name: imagesToSend[i].alt
          }
          imgObject.images.push(oneImage);
        }
        this.setState({ images: imgObject });
        console.log(this.state.images);
      })
      .catch(err => this.setState({ error: err }));
  }

  render() {
    return (
      <div>
        <LogoTop />
        <DepartmentHeader>Office of Research and Technology Management</DepartmentHeader>
        <Navbar />
        <Wrapper>
          <Breadcrumbs mainLink={"/about"} mainTitle={"About"} links={[
            {
              url: "/",
              title: "Home"
            }
          ]} />
          <Container>
            <Row>
              <Col size={"md-3"}>
                <Sidebar></Sidebar>
              </Col>
              <Col size={"md-9"}>
                <div className="float-right">
                  {!this.state.images.images ?
                    <Loader /> :
                    <ImageHolder src={this.state.images.images[0].src} name={this.state.images.images[0].name} />
                  }
                </div>
                <TextHolder textType={"header"}>{this.state.title}
                </TextHolder>
                {!this.state.content.content ?
                  <Loader /> :
                  this.state.content.content.map(paragraph => (
                    <div key={paragraph.textContent}>
                      <TextHolder>
                        {paragraph.innerText}
                      </TextHolder>
                      <br />
                    </div>
                  ))
                }
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default About;
