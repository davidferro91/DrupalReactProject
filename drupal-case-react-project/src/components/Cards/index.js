import React from 'react';
import { Container, Row, Col } from '../Grid';
import './style.css';

class Cards extends React.Component {
    render() {
      return (
          <Container>
            <Row>

              <Col size={"md-10"}>>
                 <h2 class="card-header"> Want to know more about research at <br></br>CWRU?</h2>
              </Col>
              
              <Col size={"sm-12 md-3"}>
                <img src={require("../../images/industry.jpg")} alt="Industry" className="card1pic" />
                <br></br>
                <p className="cardTitle1 pt-3">Industry</p>
                <br></br>
                <a href="/research/research-with-industry" className="cardButton1">Let Us Help</a>
                <p className="cardGreyButton">CORE FACILITIES</p>
                <p className="card-text">Find one of our core facilities.</p>
                <a href="/research/research-with-industry" className="cardButton2">Search Our Offerings</a>
            
              </Col>

              <Col size={"sm-12 md-3"}>
                <img src={require("../../images/faculty&staff.jpg")} alt="Industry" className="card1pic" />
                <br></br>
                <p className="cardTitle1 pt-3">Faculty & Staff</p>
                <br></br>
                <a href="/research/research-with-industry" className="cardButton1">Find More Information</a>
                <p className="cardGreyButton">CORPORATE RELATIONS</p>
                <p className="card-text">Find out how you can partner with Case Western Reserve.</p>
                <a href="/research/research-with-industry" className="cardButton1">Contact Corporate Relations</a>
            
              </Col>

              <Col size={"sm-12 md-3"}>
                <img src={require("../../images/students.jpg")} alt="Industry" className="card1pic" />
                <br></br>
                <p className="cardTitle1 pt-3">Students</p>
                <br></br>
                <a href="/research/research-with-industry" className="cardButton1">See What's Available </a>
                <p className="cardGreyButton">Tech Transfer</p>
                <p className="card-text">Find out about intellectual property commercialization.</p>
                <a href="/research/research-with-industry" className="cardButton2">Learn About the Office</a>
            
              </Col>
              
            </Row>
          </Container> 
  
  
      );
    }
  }
  
  export default Cards;