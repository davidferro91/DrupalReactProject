import React from 'react';
import { Container } from '../Grid';
import NavLink from '../NavLink';

import './style.css';

function BootCampLandingPageNavbar() {
  return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 bootcamp-navbar">
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
                  <NavLink>Tuition</NavLink>
                  <NavLink>FAQ</NavLink>
                  <NavLink>Blog</NavLink>
                  <NavLink>Apply</NavLink>
                  <NavLink>Testimonials</NavLink>
                  <NavLink>Trilogy</NavLink>
              </ul>
            </div>
          </nav>
  )
}


        

export default BootCampLandingPageNavbar;