import React, { Component } from 'react';
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import { Row, Col } from '../components/Grid';
import API from '../utils/API';
import { TextHolder } from '../components/Holders';
import Loader from '../components/Loader';
import ParallaxBackgroundImage from '../components/ParallaxBackgroundImage';
import Button from '../components/Button';
import { ImageCard } from '../components/Cards';

class Layout8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      images: [],
      error: "",
      title: "",
      content: [],
    };
  }

  componentDidMount() {
    this.loadContent();
  }

  loadContent = () => {
    API.getContent(this.props.node)
      .then(res => {
        const contentObject = {
          content: []
        };
        const html = res.data.body[0].processed;
        const element = document.createElement("div");
        element.innerHTML = html;

        const contentToSend = element.getElementsByTagName("p");
        for (let i = 0; i < contentToSend.length; i++) {
          if (contentToSend[i].innerHTML !== `&nbsp;`) {
            contentObject.content.push(contentToSend[i]);
          }
        }
        this.setState({ results: res.data });
        this.setState({ title: res.data.title[0].value });
        this.setState({ content: contentObject });
        console.log(this.state.content);
      })
      .catch(err => this.setState({ error: err }));
  }

  render() {
    return (
      <div>
        <LogoTop></LogoTop>
        <DepartmentHeader>{this.props.pageTitle}</DepartmentHeader>
        <ParallaxBackgroundImage backgroundImageSrc={this.props.parallaxImage}>
          <Button link="#" name={this.props.parallaxCaption}></Button>
        </ParallaxBackgroundImage>
        <Wrapper>
          <br></br>
          <Row>
            <Col size="xs-12 md-4">
              <div className="ml-3">
                <ImageCard name={this.props.cardImageName} src={this.props.cardImageSrc} link="#" linkName="Learn More">
                  {this.props.cardText}
                </ImageCard>
              </div>
            </Col>
            <Col size="xs-12 md-8">
              <div className="p-4">
                <TextHolder textType="header">{this.state.title}</TextHolder>
                <br></br>
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
              </div>
            </Col>
          </Row>
          <br></br>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default Layout8;
