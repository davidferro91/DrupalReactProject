import React from 'react';
import { Container, Col } from '../Grid';
import Dropdown from '../Dropdown';
import NavLink from '../NavLink';
import './style.css';

function Navbar() {
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
                  <Dropdown mainLink={"/about"} mainTitle={"About"} links={[
                    {
                      url: "/about/research-centers-interdisciplinary-institutes",
                      title: "Research Centers and Interdisciplinary Institutes"
                    },
                    {
                      url: "/about/research-news-signup",
                      title: "Research News Signup"
                    },
                    {
                      url: "/about/research-matters-archive",
                      title: "Research Matters Archive"
                    },
                    {
                      url: "/about/faculty-research-survey",
                      title: "Faculty Research Survey"
                    },
                    {
                      url: "/about/vpr-catalyst-awards",
                      title: "VPR Catalyst Awards"
                    },
                    {
                      url: "/about/contact-us",
                      title: "Contact Us"
                    },
                    {
                      url: "/about/feedback",
                      title: "Feedback"
                    },
                    {
                      url: "/about/meet-our-staff",
                      title: "Meet Our Staff"
                    }
                  ]}>
                    About
                    <br className="d-sm-none d-md-block"></br><br className="d-sm-none d-md-block"></br>
                  </Dropdown>
                  <Dropdown mainLink={"/research-with-industry"} links={[
                    {
                      url: "/research-with-industry/collaborate-with-cwru",
                      title: "Collaborate with CWRU"
                    },
                    {
                      url: "/research-with-industry/ohio-innovation-exchange",
                      title: "Ohio Innovation Exchange"
                    },
                    {
                      url: "/research-with-industry/ip-and-industry",
                      title: "IP and Industry"
                    },
                    {
                      url: "/research-with-industry/frequently-asked-questions",
                      title: "Frequently Asked Questions"
                    }
                  ]}>
                    Research with Industry
              </Dropdown>
                  <Dropdown mainLink={"/faculty-staff"} links={[
                    {
                      url: "/faculty-staff/funding-opportunities",
                      title: "Funding Opportunities"
                    },
                    {
                      url: "/faculty-staff/proposal-development",
                      title: "Proposal Development"
                    },
                    {
                      url: "/faculty-staff/award-management",
                      title: "Award Management"
                    },
                    {
                      url: "/faculty-staff/compliance",
                      title: "Compliance"
                    },
                    {
                      url: "/faculty-staff/education-and-training",
                      title: "Education and Training"
                    },
                    {
                      url: "/faculty-staff/technology-transfer",
                      title: "Technology Transfer"
                    },
                    {
                      url: "/faculty-staff/systems",
                      title: "Systems"
                    }
                  ]}>
                    Faculty &amp; Staff
              </Dropdown>
                  <NavLink mainLink={"/students"}>
                    Students
              </NavLink>
                  <Dropdown mainLink={"/core-facilities"} links={[
                    {
                      url: "/medicine/research/som-core-facilities",
                      title: "CWRU Medicine Core Facilities"
                    },
                    {
                      url: "/core-facilities/about-the-core-facilities-support-committee",
                      title: "About the Core Facilities Support Committee"
                    }
                  ]}>
                    Core Facilities
              </Dropdown>
                  <Dropdown mainLink={"/research-showcase"} links={[
                    {
                      url: "/research-showcase/prior-years-photos",
                      title: "Prior Years Photos"
                    },
                    {
                      url: "/research-showcase/posters-booths-faqs",
                      title: "Posters & Booths FAQs"
                    },
                    {
                      url: "/research-showcase/how-to-get-to-showcase",
                      title: "How To Get To ShowCASE"
                    },
                    {
                      url: "/research-showcase/2019-schedule",
                      title: "2019 Schedule"
                    },
                    {
                      url: "/research-showcase/2019-keynote-speaker",
                      title: "2019 Keynote Speaker"
                    },
                    {
                      url: "/research-showcase/2019-sponsors",
                      title: "2019 Sponsors"
                    },
                    {
                      url: "/research-showcase/2018-winners",
                      title: "2018 Winners"
                    },
                    {
                      url: "/research-showcase/high-school-experience",
                      title: "High School Experience"
                    }
                  ]}>
                    Research ShowCASE
              </Dropdown>
                  <Dropdown mainLink={"/popular-resources"} links={[
                    {
                      url: "/popular-resources/forms-policies",
                      title: "Forms & Policies"
                    },
                    {
                      url: "/popular-resources/changes-to-common-rule",
                      title: "Changes to the Common Rule"
                    },
                    {
                      url: "/popular-resources/interested-in-participating-in-research",
                      title: "Interested in participating in research?"
                    },
                    {
                      url: "/popular-resources/ksl-research-services",
                      title: "KSL Research Services"
                    }
                  ]}>
                    Popular Resources
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

export default Navbar;