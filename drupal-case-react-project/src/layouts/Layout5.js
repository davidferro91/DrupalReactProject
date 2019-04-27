import React, { Component } from 'react';
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import { Row, Col } from '../components/Grid';
import API from '../utils/API';
import { TextHolder, CaptionImageHolder } from '../components/Holders';
import Loader from '../components/Loader';

class Layout5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results1: [],
      results2: [],
      images: [],
      error: "",
      title1: "",
      title2: "",
      content1: [],
      content2: [],
    };
  }

  componentDidMount() {
    this.loadContent1();
    this.loadContent2();
  }

  loadContent1 = () => {
    API.getContent(this.props.node1)
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
        this.setState({ results1: res.data });
        this.setState({ title1: res.data.title[0].value });
        this.setState({ content1: contentObject });
        console.log(this.state.content1);
      })
      .catch(err => this.setState({ error: err }));
  }

  loadContent2 = () => {
    API.getContent(this.props.node2)
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
        this.setState({ results2: res.data });
        this.setState({ title2: res.data.title[0].value });
        this.setState({ content2: contentObject });
        console.log(this.state.content2);
      })
      .catch(err => this.setState({ error: err }));
  }

  render() {
    return (
      <div>
        <LogoTop></LogoTop>
        <DepartmentHeader>{this.props.pageTitle}</DepartmentHeader>
        <Wrapper>
          <br></br>
          <Row>
            <Col size="xs-12 md-7">
              <div className="p-4">
                <TextHolder textType="header">{this.state.title1}</TextHolder>
                <br></br>
                {!this.state.content1.content ?
                  <Loader /> :
                  this.state.content1.content.map(paragraph => (
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
            <Col size="xs-12 md-5">
              <div className="mr-3">
                <CaptionImageHolder src={this.props.image1Src} name={this.props.image1Name} caption={this.props.image1Caption} fluid={true}>
                </CaptionImageHolder>
              </div>
            </Col>
          </Row>
          <Row>
          <Col size="xs-12 md-5">
              <div className="ml-3">
                <CaptionImageHolder src={this.props.image2Src} name={this.props.image2Name} caption={this.props.image2Caption} fluid={true}>
                </CaptionImageHolder>
              </div>
            </Col>
            <Col size="xs-12 md-7">
              <div className="p-4">
                <TextHolder textType="header">{this.state.title2}</TextHolder>
                <br></br>
                {!this.state.content2.content ?
                  <Loader /> :
                  this.state.content2.content.map(paragraph => (
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

export default Layout5;