import React from 'react';
import { Container, Row, Col } from '../Grid';
import { Link } from 'react-router-dom';
import './style.css';

function CalendarEvent(props) {
  return (
    <div className="mt-4">
    <Container fluid={true}>
      <Row>
        <Col size={"md-3"}>
          <div className="month">{props.month}</div>

          <div className="day">{props.day}</div>
        </Col>
        <Col size={"md-9"}>
          <Link to={props.link}>
            <div className="calendar-link mr-0 pr-0">
              {props.children}
            </div>
          </Link>
        </Col>
      </Row>
      <hr className="mb-0 pb-0"/>
    </Container>
    </div>
  );
}

export default CalendarEvent;
