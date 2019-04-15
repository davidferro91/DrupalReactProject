import React, { Component } from 'react';
import '../components/BootCampLandingPageNav';
import BootCampLandingPageNavbar from '../components/BootCampLandingPageNav';
import Footer from '../components/Footer';
import SidebarJobFair from '../components/SidebarJobFair';
import {TextHolder, ImageHolder} from '../components/Holders';
import './style-job-fair.css';
import LogoTop from '../components/LogoTop';

class JobFair extends Component {

  render() {
    return (
      <div>
        <LogoTop />
        <BootCampLandingPageNavbar />
        <TextHolder textType={"header"}>{<img src={require("../images/job-fair-case.png")} alt="CWRU Logo" className="footer-logo mb-2"/>}
        </TextHolder>
        <SidebarJobFair />
        

        <Footer />
      </div>
    );
  }

}

export default JobFair;
