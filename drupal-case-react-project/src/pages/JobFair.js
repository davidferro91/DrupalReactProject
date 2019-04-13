import React, { Component } from 'react';
import '../components/BootCampLandingPageNav';
import BootCampLandingPageNavbar from '../components/BootCampLandingPageNav';
import Footer from '../components/Footer';
import SidebarJobFair from '../components/SidebarJobFair';
import {TextHolder, ImageHolder} from '../components/Holders';

class JobFair extends Component {

  render() {
    return (
      <div>
        <TextHolder textType={"header"}>{"v3rv3"}
        </TextHolder>
        <BootCampLandingPageNavbar />
        <SidebarJobFair />
        

        <Footer />
      </div>
    );
  }

}

export default JobFair;
