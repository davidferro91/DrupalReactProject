import React, { Component } from 'react';
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import Breadcrumbs from '../components/Breadcrumbs';
import { Container, Row, Col } from '../components/Grid';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { TextHolder, CaptionImageHolder } from '../components/Holders';
import API from '../utils/API';
import { ImageCard } from '../components/Cards';

class FacultyStaff extends Component {

  state = {
    results: [],
    error: "",
    title: "",
    content: [],
    listItems: []
  }

  componentDidMount() {
    this.loadContent();
  }

  loadContent = () => {
    API.getContent("181")
      .then(res => {
        const pageData = res.data.metatag[0].value.abstract;
        const splitData = pageData.split("\n");
        const parsedData = [];
        for (let i = 0; i < splitData.length; i++) {
          if (splitData[i].trim() !== "" && splitData[i].trim() !== "," && splitData[i].trim() !== ", , , , ,") {
            parsedData.push(splitData[i].trim());
          }
        }
        console.log(parsedData);

        this.setState({ results: res.data });
        this.setState({ title: res.data.title[0].value });
        this.setState({ content: parsedData });

        console.log(this.state.results);
        console.log(this.state.content);
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
          <Breadcrumbs mainLink={"/faculty-staff"} mainTitle={"Faculty & Staff"} links={[
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
                <TextHolder textType={"header"}>{this.state.title}</TextHolder>
                <CaptionImageHolder fluid={true} src="http://research.dd:8083/sites/research.dd/files/styles/hero_one_column/public/2018-04/banner_1122x340_showcase.png?itok=cQx0sUMC" name="Presenter talking" caption="Research ShowCASE is a celebration of CWRU student research.  Learn More About the Event"></CaptionImageHolder>
                <Row>
                  <Col size={"md-6"}>
                    <ImageCard name={this.state.content[0]} src="http://research.dd:8083/sites/research.dd/files/styles/subfeature_705x528_/public/2018-04/staff_312x120_funding-opps.png?itok=QaOrzGYf" link="/faculty-staff/funding-opportunities" linkName={this.state.content[2]}>{this.state.content[1]}</ImageCard>
                  </Col>
                  <Col size={"md-6"}>
                    <ImageCard name={this.state.content[3]} src="http://research.dd:8083/sites/research.dd/files/styles/subfeature_705x528_/public/2018-04/staff_312x120_prop-dev.png?itok=0lYAbkI4" link="/faculty-staff/proposal-development" linkName={this.state.content[5]}>{this.state.content[4]}</ImageCard>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col size={"md-6"}>
                    <ImageCard name={this.state.content[6]} src="http://research.dd:8083/sites/research.dd/files/styles/subfeature_705x528_/public/2018-04/staff_312x120_award-mgt.png?itok=QopSj1nB" link="/faculty-staff/award-management" linkName={this.state.content[8]}>{this.state.content[7]}</ImageCard>
                  </Col>
                  <Col size={"md-6"}>
                    <ImageCard name={this.state.content[9]} src="http://research.dd:8083/sites/research.dd/files/styles/subfeature_705x528_/public/2018-04/staff_312x120_compliance.png?itok=I-tExbJh" link="/faculty-staff/compliance" linkName={this.state.content[11]}>{this.state.content[10]}</ImageCard>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col size={"md-6"}>
                    <ImageCard name={this.state.content[12]} src="http://research.dd:8083/sites/research.dd/files/styles/subfeature_705x528_/public/2018-04/staff_312x120_education.png?itok=RACsaEFF" link="/faculty-staff/education-and-training" linkName={this.state.content[14]}>{this.state.content[13]}</ImageCard>
                  </Col>
                  <Col size={"md-6"}>
                    <ImageCard name={this.state.content[15]} src="http://research.dd:8083/sites/research.dd/files/styles/subfeature_705x528_/public/2018-04/staff_312x120_tto.png?itok=FO4l6FyA" link="/faculty-staff/technology-transfer" linkName={this.state.content[17]}>{this.state.content[16]}</ImageCard>
                  </Col>
                </Row>
                <br></br>
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default FacultyStaff;
