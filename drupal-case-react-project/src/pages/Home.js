import React, { Component } from 'react';
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import { Container, Row, Col } from '../components/Grid';
import { TextCard, ImageCard } from '../components/Cards';
import CalendarEvent from '../components/CalendarEvent';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import '../app.css';
import { TextHolder, ImageHolder } from '../components/Holders';
import { Link } from 'react-router-dom';

class Home extends Component {

  state = {
    results: [],
    images: [],
    error: "",
    title: "",
    content: []
  }

  render() {
    return (
      <div>
        <LogoTop />
        <DepartmentHeader>Office of Research and Technology Management</DepartmentHeader>
        <Navbar />
        <Wrapper>
          <Container>
            <Row>
              <Col size={"xl-9 xs-12"}>
                <Carousel
                  mainImage={
                    {
                      src: "http://research.dd:8083/sites/research.dd/files/styles/hero_one_column/public/2018-04/banner_1122x340_welcomeVPR.png?h=6675080d&itok=3U4-_xgm",
                      name: "Research drives Case Western Reserve University.  See what our researchers do."
                    }
                  }
                  imageItems={[
                    {
                      src: "http://research.dd:8083/sites/research.dd/files/styles/hero_one_column/public/2018-04/banner_1122x340_TTO-wires.jpg?h=6675080d&itok=FFY0Jai5",
                      name: "CWRU ranked 13th in translating research breakthroughs to commercial success.  Read our story."
                    },
                    {
                      src: "http://research.dd:8083/sites/research.dd/files/styles/hero_one_column/public/2018-04/banner_1122x340_showcase2015.jpg?h=6675080d&itok=BlRDYNBv",
                      name: "Research ShowCASE is held annually in April.  Learn more about the event."
                    },
                    {
                      src: "http://research.dd:8083/sites/research.dd/files/styles/hero_one_column/public/2018-04/IoT_banner1122x340.png?h=6675080d&itok=nf3VvO8P",
                      name: "Case Western Reserve and CSU awarded $1.75 million to launch IoT Collaborative.  Here's what it means."
                    }
                  ]}>
                </Carousel>
                <Container>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col size={"lg-1"}></Col>
                    <Col size={"lg-10"}>
                      <TextHolder textType="header">
                        <div className="text-center">
                          Want to know more about research at CWRU?
                        </div>
                      </TextHolder>
                    </Col>
                  </Row>
                  <br></br>
                  <br></br>
                </Container>
                <div className="m-2">
                  <Row>
                    <Col size={"xs-12 md-4"}>
                      <ImageCard
                        src={"http://research.dd:8083/sites/research.dd/files/styles/subfeature_705x528_/public/2018-04/subfeature_344x172_industry.jpg?h=194d3d14&itok=4xbTQTk5"}
                        name="Industry"
                        link="/research-with-industry"
                        linkName="Let Us Help"
                      >
                        Collaborate with CWRU researchers.
                      </ImageCard>
                    </Col>
                    <Col size={"xs-12 md-4"}>
                      <ImageCard
                        src={"http://research.dd:8083/sites/research.dd/files/styles/subfeature_705x528_/public/2018-04/subfeature_344x172_faculty%26staff.jpg?h=d66ccf8e&itok=j06TImgX"}
                        name="Faculty & Staff"
                        link="/research-with-industry"
                        linkName="Find More Information"
                      >
                        Resources to help researchers and staff.
                      </ImageCard>
                    </Col>
                    <Col size={"xs-12 md-4"}>
                      <ImageCard
                        src={"http://research.dd:8083/sites/research.dd/files/styles/subfeature_705x528_/public/2018-04/subfeature_344x172_students.jpg?h=194d3d14&itok=tPIw9P7F"}
                        name="Students"
                        link="/students"
                        linkName="See What's Available"
                      >
                        Research opportunities for students.
                      </ImageCard>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col size={"xs-12 md-4"}>
                      <TextCard name="Core Facilities" link="/core-facilities" linkName="Search Our Offerings">
                        Find one of our core facilities.
                      </TextCard>
                    </Col>
                    <Col size={"xs-12 md-4"}>
                      <TextCard name="Corporate Relations" link="/research-with-industry" linkName="Contact Corporate Relations">
                        Find out how you can partner with Case Western Reserve.
                      </TextCard>
                    </Col>
                    <Col size={"xs-12 md-4"}>
                      <TextCard name="Tech Transfer" link="/faculty-staff/technology-transfer" linkName="Learn About the Office">
                        Find out about intellectual property commercialization.
                      </TextCard>
                    </Col>
                  </Row>
                </div>
                <br></br>
                <div className="text-center">
                  <TextHolder>
                    Case Western Reserve University is a proud participant in the
                  </TextHolder>
                  <ImageHolder src="http://research.dd:8083/sites/research.dd/files/styles/medium/public/2018-11/oiex-logo_web.png?itok=JSZjIs9c" name="Ohio Innovation Exchange"/>
                  <Link to="/research-with-industry/ohio-innovation-exchange">Learn More</Link>
                </div>
              </Col>
              <Col size={"xl-3 xs-12"}>
                <div className="m-2">
                  <TextCard name="Research Events" link="https://calendar.google.com/calendar/htmlembed?src=case.edu_sd9eae1f1i32lsru03ogb53tm4%40group.calendar.google.com" linkName="View Full Calendar">
                    <CalendarEvent month="Apr" day="16" link={"https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2ZGg2Y2QzMmNwaTM2ZTlvY29zMzZvcG83NWhtNGRwb2NwaGo2b2hoNmRpajRwOWg2OWlnIGNhc2UuZWR1X3NkOWVhZTFmMWkzMmxzcnUwM29nYjUzdG00QGc"}>
                      Getting Started with your Research
                    </CalendarEvent>
                    <CalendarEvent month="Apr" day="26" link={"https://www.google.com/calendar/event?eid=NmN0azNhNTdwdGMzbzVndnFqZ2NjYmc0NjAgY2FzZS5lZHVfc2Q5ZWFlMWYxaTMybHNydTAzb2diNTN0bTRAZw"}>
                      Sparta IRB: Getting Started
                    </CalendarEvent>
                    <CalendarEvent month="May" day="02" link={"https://www.google.com/calendar/event?eid=MzJvNGRpN2NpcmNzcDE3NDY1NjBwbjEwbmcgY2FzZS5lZHVfc2Q5ZWFlMWYxaTMybHNydTAzb2diNTN0bTRAZw"}>
                      Research Misconduct: How to Be Sure Your Research Is Never Called Into Question
                    </CalendarEvent>
                  </TextCard>
                </div>
                <div className="m-2">
                  <TextCard name="Research CWRU News" link="http://thedaily.case.edu/category/research/" linkName="Read More News">
                    <CalendarEvent month="Apr" day="04" link={"https://thedaily.case.edu/robots-reading-feelings/"}>
                      Robots reading feelings
                    </CalendarEvent>
                    <CalendarEvent month="Apr" day="04" link={"https://thedaily.case.edu/case-school-of-engineering-taking-lead-role-in-gelfand-global-stempower-initiative-in-ethiopia/"}>
                      Case School of Engineering taking lead role in Gelfand Global STEMPower Initiative in Ethiopia
                    </CalendarEvent>
                    <CalendarEvent month="Apr" day="03" link={"https://thedaily.case.edu/optimizing-the-human-robot-workplace/"}>
                      Optimizing the human-robot workplace
                    </CalendarEvent>
                    <CalendarEvent month="Apr" day="01" link={"https://thedaily.case.edu/new-findings-shed-light-on-origin-of-upright-walking-in-human-ancestors/"}>
                      New findings shed light on origin of upright walking in human ancestors
                    </CalendarEvent>
                    <CalendarEvent month="Mar" day="28" link={"https://thedaily.case.edu/gangs-are-built-around-social-networks-not-crime-case-western-reserve-researcher/"}>
                      Gangs are built around social networks, not crime: Case Western Reserve researcher
                    </CalendarEvent>
                  </TextCard>
                </div>
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default Home;