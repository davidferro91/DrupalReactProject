import React from 'react';
import { Container, Col } from '../Grid';
import Dropdown from '../Dropdown';
import NavLink from '../NavLink';
import './style.css';

function BootCampLandingPageNavbar() {
  return (
    <Container>
      <div className="navbar navbar-default p-0" id="navbar" role="navigation">
        <Col size={"xs-12"}>
          <div className="p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
              <button className="navbar-toggler border border-white p-3 btn btn-light btn-lg btn-block" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span><i className="fas fa-bars"></i><strong>  Navigation + Search  </strong></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-lg-none">
                  <form className="form-inline my-0 my-lg-0 p-2">
                    <input className="form-control" type="text" placeholder="CWRU Search" aria-label="Search" />
                    <div className="input-group-append">
                      <span className="input-group-text py-2" id="inputGroupAppend"><i className="fas fa-search"></i></span>
                    </div>
                  </form>
                </div>
                <ul className="navbar-nav mr-auto">
                  <Dropdown mainLink={"/research/about"} mainTitle={"About"} links={[
                    {
                      url: "/research/about/research-centers-interdisciplinary-institutes",
                      title: "Research Centers and Interdisciplinary Institutes"
                    },
                    {
                      url: "/research/about/research-news-signup",
                      title: "Research News Signup"
                    },
                    {
                      url: "/research/about/research-matters-archive",
                      title: "Research Matters Archive"
                    },
                    {
                      url: "/research/about/faculty-research-survey",
                      title: "Faculty Research Survey"
                    },
                    {
                      url: "/research/about/vpr-catalyst-awards",
                      title: "VPR Catalyst Awards"
                    },
                    {
                      url: "/research/about/contact-us",
                      title: "Contact Us"
                    },
                    {
                      url: "/research/about/feedback",
                      title: "Feedback"
                    },
                    {
                      url: "/research/about/meet-our-staff",
                      title: "Meet Our Staff"
                    }
                  ]}>
                    About
                    <br className="d-sm-none d-md-block"></br><br className="d-sm-none d-md-block"></br>
                  </Dropdown>
                  <Dropdown mainLink={"/research/research-with-industry"} links={[
                    {
                      url: "/research/research-with-industry/collaborate-with-cwru",
                      title: "Collaborate with CWRU"
                    },
                    {
                      url: "/research/research-with-industry/ohio-innovation-exchange",
                      title: "Ohio Innovation Exchange"
                    },
                    {
                      url: "/research/research-with-industry/ip-and-industry",
                      title: "IP and Industry"
                    },
                    {
                      url: "/research/research-with-industry/frequently-asked-questions",
                      title: "Frequently Asked Questions"
                    }
                  ]}>
                    Coding
              </Dropdown>
                  <Dropdown mainLink={"/research/faculty-staff"} links={[
                    {
                      url: "/research/faculty-staff/funding-opportunities",
                      title: "Funding Opportunities"
                    },
                    {
                      url: "/research/faculty-staff/proposal-development",
                      title: "Proposal Development"
                    },
                    {
                      url: "/research/faculty-staff/award-management",
                      title: "Award Management"
                    },
                    {
                      url: "/research/faculty-staff/compliance",
                      title: "Compliance"
                    },
                    {
                      url: "/research/faculty-staff/education-and-training",
                      title: "Education and Training"
                    },
                    {
                      url: "/research/faculty-staff/technology-transfer",
                      title: "Technology Transfer"
                    },
                    {
                      url: "/research/faculty-staff/systems",
                      title: "Systems"
                    }
                  ]}>
                    Data
              </Dropdown>
                  <NavLink mainLink={"/research/students"}>
                    Cyber
              </NavLink>
                  <Dropdown mainLink={"/research/core-facilities"} links={[
                    {
                      url: "/medicine/research/som-core-facilities",
                      title: "CWRU Medicine Core Facilities"
                    },
                    {
                      url: "/research/core-facilities/about-the-core-facilities-support-committee",
                      title: "About the Core Facilities Support Committee"
                    }
                  ]}>
                    Experience
              </Dropdown>
                  <Dropdown mainLink={"/research/research-showcase"} links={[
                    {
                      url: "/research/research-showcase/prior-years-photos",
                      title: "Prior Years Photos"
                    },
                    {
                      url: "/research/research-showcase/posters-booths-faqs",
                      title: "Posters & Booths FAQs"
                    },
                    {
                      url: "/research/research-showcase/how-to-get-to-showcase",
                      title: "How To Get To ShowCASE"
                    },
                    {
                      url: "/research/research-showcase/2019-schedule",
                      title: "2019 Schedule"
                    },
                    {
                      url: "/research/research-showcase/2019-keynote-speaker",
                      title: "2019 Keynote Speaker"
                    },
                    {
                      url: "/research/research-showcase/2019-sponsors",
                      title: "2019 Sponsors"
                    },
                    {
                      url: "/research/research-showcase/2018-winners",
                      title: "2018 Winners"
                    },
                    {
                      url: "/research/research-showcase/high-school-experience",
                      title: "High School Experience"
                    }
                  ]}>
                    FAQ
              </Dropdown>
                  <Dropdown mainLink={"/research/popular-resources"} links={[
                    {
                      url: "/research/popular-resources/forms-policies",
                      title: "Forms & Policies"
                    },
                    {
                      url: "/research/popular-resources/changes-to-common-rule",
                      title: "Changes to the Common Rule"
                    },
                    {
                      url: "/research/popular-resources/interested-in-participating-in-research",
                      title: "Interested in participating in research?"
                    },
                    {
                      url: "/research/popular-resources/ksl-research-services",
                      title: "KSL Research Services"
                    }
                  ]}>
                    Blog
              </Dropdown>
              <Dropdown mainLink={"/research/popular-resources"} links={[
                    {
                      url: "/research/popular-resources/forms-policies",
                      title: "Forms & Policies"
                    },
                    {
                      url: "/research/popular-resources/changes-to-common-rule",
                      title: "Changes to the Common Rule"
                    },
                    {
                      url: "/research/popular-resources/interested-in-participating-in-research",
                      title: "Interested in participating in research?"
                    },
                    {
                      url: "/research/popular-resources/ksl-research-services",
                      title: "KSL Research Services"
                    }
                  ]}>
                    Apply
              </Dropdown>
                </ul>
              </div>
            </nav>
          </div>
        </Col>
      </div>
    </Container>
  );
}

export default BootCampLandingPageNavbar;