import React, { Component } from 'react';
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { Container, Row, Col } from '../components/Grid';
import { ImageCard } from '../components/Cards';
import { TextHolder } from '../components/Holders';

class TestLanding2 extends Component {
  render() {
    return (
      <div>
        <LogoTop></LogoTop>
        <DepartmentHeader>Here is our quickly made header!</DepartmentHeader>
        <Navbar></Navbar>
        <Wrapper>
          <Carousel mainImage={
            {
            name: "Here's my main image!",
            src: "https://s3-prod.crainscleveland.com/s3fs-public/health_education_campus_rendering_1.jpg"
          }} imageItems={[{
            name: "Another image!",
            src: "https://mediad.publicbroadcasting.net/p/wksu/files/styles/x_large/public/201711/cwru.jpg"
          },
          {
            name:"A third image!",
            src: "https://case.edu/visit/images/campus-3.jpg"
          }]}></Carousel>
          <Container>
            <Row>
              <Col size="md-3">
              <ImageCard name="Cool Card Bro!" src="https://www.thoughtco.com/thmb/PsewpEkGLOfyN38p1FesZcKkD1Q=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/UniversityHospitals-5718e0663df78c3fa283f650.JPG" linkName="This is awesome!" link="/testlanding">
                Here is some text to look at!
              </ImageCard>
              </Col>
              <Col size="md-9">
              <TextHolder textType="header">
                This is a header!
              </TextHolder>
              <br></br>
              <TextHolder>
                Consectetur magna deserunt enim est Lorem dolore occaecat mollit dolore. Incididunt culpa minim labore est minim officia minim Lorem. Culpa consectetur magna ipsum anim irure aliqua nulla dolor laboris eu. Ad fugiat est excepteur aliqua incididunt ullamco consequat tempor. Sit labore ex proident et laborum deserunt pariatur enim exercitation aliqua laborum.
              </TextHolder>
              <br></br>
              <TextHolder>
                Sunt nostrud est laborum dolore amet esse ex sint culpa amet id commodo ullamco ea. Amet adipisicing minim pariatur ut est nisi adipisicing esse eu ipsum ea amet deserunt. Incididunt officia id et dolore qui aliqua nulla. Sit elit do id sunt id nisi et adipisicing ullamco laborum esse. Consectetur qui aliquip culpa magna qui occaecat pariatur incididunt.
              </TextHolder>
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <Footer></Footer>
      </div>
    );
  }
}

export default TestLanding2;
