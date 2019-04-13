import React, { Component } from 'react';
import '../components/BootCampLandingPageNav';
import BootCampLandingPageNavbar from '../components/BootCampLandingPageNav';
import Footer from '../components/Footer';
import SidebarJobFair from '../components/SidebarJobFair';

class BootCampSched extends Component {

  render() {
    return (
      <div>
        <BootCampLandingPageNavbar />
        <SidebarJobFair />
        <Footer />
      </div>
    );
  }

}

export default BootCampSched;
