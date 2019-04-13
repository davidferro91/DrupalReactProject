import React, { Component } from 'react';
import '../components/BootCampLandingPageNav';
import BootCampLandingPageNavbar from '../components/BootCampLandingPageNav';
import Footer from '../components/Footer';

class BootCampSched extends Component {

  render() {
    return (
      <div>
        <BootCampLandingPageNavbar />
        <Footer />
      </div>
    );
  }

}

export default BootCampSched;
