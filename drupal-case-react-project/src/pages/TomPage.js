import React, { Component } from 'react';
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Wrapper from '../components/Wrapper';
import { Container, Row, Col } from '../components/Grid';
import CalendarEvent from '../components/CalendarEvent';
import Footer from '../components/Footer';
import API from '../utils/API';
import Loader from '../components/Loader';
import { TextHolder } from '../components/Holders';
import BootCampCarousel from '../components/BootCampCarousel';

class TomPage extends Component {


  state = {
    results: [],
    images: [],
    error: "",
    title: "",
    content: []
  }

  componentDidMount() {
    this.loadContent();
  }

  loadContent = () => {
  API.getContent("31")
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
  render () {
    return (
      <div>
        <LogoTop></LogoTop>
        <DepartmentHeader>Tom's Page</DepartmentHeader>
        <Wrapper>
          <Container>
            <Row>
              <Col size={"md-8"}>
                <CalendarEvent month="May" day="01">
                  Go to the store
                </CalendarEvent>
                <CalendarEvent month="May" day="02">
                  Demo Day !!!!
                </CalendarEvent>
                <CalendarEvent month="May" day="03">
                  Go to the Jolly Scholar
                </CalendarEvent>
                <CalendarEvent month="May" day="04">
                  Say hello to my wife and kids.
                </CalendarEvent>
                <CalendarEvent month="May" day="05">
                  Free day.
                </CalendarEvent>
                <CalendarEvent month="May" day="06">

                </CalendarEvent>
                <CalendarEvent month="May" day="07">

                </CalendarEvent>
                <BootCampCarousel
            header1="Web Development" 
            header2="Data Bootcamp" 
            header3="Cybersecurity Bootcamp"
            src1="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/homepage_hero_coding.jpg"
            src2="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/homepage_hero_data.jpg"
            src3="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/img_hero.jpg"
            />
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
        <Footer></Footer>
      </div>
    );
  }
}

export default TomPage;