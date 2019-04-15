import React, { Component } from 'react';
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import Breadcrumbs from '../components/Breadcrumbs';
import { Container, Row, Col } from '../components/Grid';
import Sidebar from '../components/Sidebar';
import { TextHolder, ImageHolder } from '../components/Holders';
import API from '../utils/API';
import Footer from '../components/Footer';
import '../app.css';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { TextCard } from '../components/Cards';

class ResearchWithIndustry extends Component {

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
    API.getContent("26")
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
        // for (let i = 0; i < contentToSend.length; i++) {
        //   contentObject.content.push(contentToSend[i]);
        // }
        const listItemArr = [];
        for (let i = 3; i < 12; i++) {
          listItemArr.push(parsedData[i]);
        }
        this.setState({ results: res.data });
        this.setState({ title: res.data.title[0].value });
        this.setState({ content: parsedData });
        this.setState({ listItems: listItemArr });
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
          <Breadcrumbs mainLink={"/research-with-industry"} mainTitle={"Research with Industry"} links={[
            {
              url: "/",
              title: "Home"
            }
          ]} />
          <Container>
            <Row>
              <Col size={"md-3"}>
              <Sidebar title={"Research with Industry"} titleLink="/research-with-industry" content={
                  [
                    {
                      link: "/research-with-industry/collaborate-with-cwru",
                      name: "Collaborate with CWRU"
                    },
                    {
                      link: "/research-with-industry/ohio-innovation-exchange",
                      name: "Ohio Innovation Exchange"
                    },
                    {
                      link: "/research-with-industry/ip-and-industry",
                      name: "IP and Industry"
                    }
                  ]
                }></Sidebar>
              </Col>
              <Col size={"md-9"}>
                <TextHolder textType={"header"}>{this.state.title}
                </TextHolder>
                <div className="my-3 mx-0">
                  <Carousel
                    mainImage={
                      {
                        src: "http://research.dd:8083/sites/research.dd/files/styles/hero_one_column/public/2018-04/siemens-healthcare-%5B3080x933%5D.jpg?itok=LusMPLex",
                        name: "CWRU, UHCMC to partner exclusively with Siemens Healthcare to bring MRI research technique to clinical application.  Read More About Our Partnership"
                      }
                    }
                    imageItems={[
                      {
                        src: "http://research.dd:8083/sites/research.dd/files/styles/hero_one_column/public/2018-04/ARPAE.jpg?itok=DJdjILgw",
                        name: "CWRU researchers to make virtual energy audits a reality.  Read About Grant"
                      },
                      {
                        src: "http://research.dd:8083/sites/research.dd/files/styles/hero_one_column/public/2018-04/FlowBat-cropped2.jpg?itok=i4ViL6Co",
                        name: "CWRU receives funding to lead research in energy storage for defense, aerospace industries.  Learn More About Our Research"
                      },
                      {
                        src: "http://research.dd:8083/sites/research.dd/files/styles/hero_one_column/public/2018-04/Heater%20Banner.png?itok=cfYn1oiM",
                        name: "NASA Glenn Research Center, CWRU Fusion partner to commercialize new water-purification technology.  Read More About Water-Purification"
                      }
                    ]}>
                  </Carousel>
                </div>
                <Row>
                  <Col size={"xl-8 lg-6 xs-12"}>
                    <TextHolder textType="header">
                      {this.state.content[0]}
                    </TextHolder>
                    <br></br>
                    <TextHolder>{this.state.content[1]}</TextHolder>
                    <br></br>
                    <TextHolder>{this.state.content[2]}</TextHolder>
                    <br></br>
                    <TextHolder>
                      <ul>
                        {this.state.listItems.map(listItem => (
                          <div>
                          <li>{listItem}</li>
                          <br></br>
                          </div>
                        ))}
                      </ul>
                    </TextHolder>
                    <br></br>
                    <div className="text-center">
                      <TextHolder>
                        Case Western Reserve University is a proud participant in the
                      </TextHolder>
                      <ImageHolder src="http://research.dd:8083/sites/research.dd/files/styles/medium/public/2018-11/oiex-logo_web.png?itok=JSZjIs9c" name="Ohio Innovation Exchange" />
                      <Link to="/research-with-industry/ohio-innovation-exchange">Learn More</Link>
                    </div>
                  </Col>
                  <Col size={"xl-4 lg-6 xs-12"}>
                    <Button link="https://case.edu/industry/recruit-talent/" name="Recruit Talent" />
                    <Button link="/core-facilities" name="Find Equipment or Services" />
                    <Button link="/about/contact-us" name="Contact Us" />
                    <div>
                    <TextCard name="CWRU's Economic Impact" link="/sites" linkName="Download the Guide">
                    <ImageHolder fluid={true} src="http://research.dd:8083/sites/research.dd/files/styles/large/public/2018-04/Economic_Impact_tn.png?itok=7jEqZ28E" name="Cover of the Economic Impact brochure with the CWRU campus"></ImageHolder>
                    </TextCard>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default ResearchWithIndustry;
