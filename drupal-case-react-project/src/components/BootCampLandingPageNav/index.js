import React from 'react';
import NavLink from '../NavLink';

import './style.css';
import { Container, Col } from '../Grid';

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
                  <NavLink>About</NavLink>
                  <NavLink>Bootcamp</NavLink>
                  <NavLink>Code</NavLink>
                  <NavLink>Data</NavLink>
                  <NavLink>Cyber</NavLink>
                  <NavLink>Experience</NavLink>
                  <NavLink>FAQ</NavLink>
                  <NavLink>Tuition</NavLink>
                  <NavLink>Apply</NavLink>
                  <NavLink>Testimonials</NavLink>
                  <NavLink>Trilogy</NavLink>
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