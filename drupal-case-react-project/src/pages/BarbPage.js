import React, { Component } from 'react';
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Table from '../components/Table';
import { Container, Row, Col } from '../components/Grid';
import { TextCard } from '../components/Cards';
import CalendarEvent from '../components/CalendarEvent';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';

class BarbPage extends Component {
  render() {
    return (
      <div>
      <LogoTop></LogoTop>
      <DepartmentHeader>Barb's Page</DepartmentHeader>
      <Wrapper>
      <Container>
        <Row>
          <Col size={"md-8"}>
          <Table></Table>
          </Col>
          <Col size={"md-4"}>
          <TextCard>
            <CalendarEvent month="May" day="02" link="/bootcamp">
              Boot Camp Demo Day!!!

            </CalendarEvent>
          </TextCard>
          </Col>
        </Row>
      </Container>
      </Wrapper>
      <Footer></Footer>
      
      
      </div>
    );
  }
}

export default BarbPage;