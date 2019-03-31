import React from 'react';
import { Container, Col } from '../Grid';
import Dropdown from '../Dropdown';
import NavLink from '../NavLink';
import './style.css';

function Navbar() {
  return (
    <Container>
    <div className="navbar navbar-default" id="navbar" role="navigation">
      <Col size={"xs-12"}>
      <div className="no-padding">
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
              <Dropdown mainLink={"/research/about"} links={[{ url: "/research/about/research-centers-interdisciplinary-institutes", title: "Research Centers and Interdisciplinary Institutes" }, { url: "/research/about/research-news-signup", title: "Research News Signup" }]}>
                About
              </Dropdown>
              <Dropdown mainLink={"/research/about"} links={[{ url: "/research/about/research-centers-interdisciplinary-institutes", title: "Research Centers and Interdisciplinary Institutes" }, { url: "/research/about/research-news-signup", title: "Research News Signup" }]}>
                Research with Industry
              </Dropdown>
              <Dropdown mainLink={"https://case.edu/research/about"} links={[{ url: "https://case.edu/research/about/research-centers-interdisciplinary-institutes", title: "Research Centers and Interdisciplinary Institutes" }, { url: "https://case.edu/research/about/research-news-signup", title: "Research News Signup" }]}>
                Faculty &amp; Staff
              </Dropdown>
              <NavLink mainLink={"https://case.edu/research/students"}>
                Students
              </NavLink>
              <Dropdown mainLink={"https://case.edu/research/about"} links={[{ url: "https://case.edu/research/about/research-centers-interdisciplinary-institutes", title: "Research Centers and Interdisciplinary Institutes" }, { url: "https://case.edu/research/about/research-news-signup", title: "Research News Signup" }]}>
                Core Facilities
              </Dropdown>
              <Dropdown mainLink={"https://case.edu/research/about"} links={[{ url: "https://case.edu/research/about/research-centers-interdisciplinary-institutes", title: "Research Centers and Interdisciplinary Institutes" }, { url: "https://case.edu/research/about/research-news-signup", title: "Research News Signup" }]}>
                Research ShowCASE
              </Dropdown>
              <Dropdown mainLink={"https://case.edu/research/about"} links={[{ url: "https://case.edu/research/about/research-centers-interdisciplinary-institutes", title: "Research Centers and Interdisciplinary Institutes" }, { url: "https://case.edu/research/about/research-news-signup", title: "Research News Signup" }]}>
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