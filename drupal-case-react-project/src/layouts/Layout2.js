import React, { Component } from 'react';
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import Carousel from '../components/Carousel';
import { Row, Col } from '../components/Grid';
import { TextCard } from '../components/Cards';
import CalendarEvent from '../components/CalendarEvent';
import API from '../utils/API';
import { TextHolder } from '../components/Holders';
import Loader from '../components/Loader';

class Layout2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      images: [],
      error: "",
      title: "",
      content: []
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
        // console.log(this.state.results);
        console.log(this.state.content);
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
          <Col size="xs-12 md-3">
              <div className="pl-4">
                <TextCard name="Upcoming Dates" link="#" linkName="See Full Calendar">
                  {this.props.calendarEvents.map(event => (
                    <CalendarEvent key={event.description} month={event.month} day={event.day} link="#">{event.description}</CalendarEvent>
                  ))}
                </TextCard>
              </div>
            </Col>
            <Col size="xs-12 md-9">
              <Carousel mainImage={this.props.carouselMainImage} imageItems={this.props.carouselImageItems}></Carousel>
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

export default Layout2;