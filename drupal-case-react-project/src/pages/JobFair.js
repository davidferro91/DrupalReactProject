import React, { Component } from 'react';
import '../components/BootCampLandingPageNav';
import BootCampLandingPageNavbar from '../components/BootCampLandingPageNav';
import Footer from '../components/Footer';
import SidebarJobFair from '../components/SidebarJobFair';
import { TextHolder } from '../components/Holders';
import Table from '../components/Table';
import LogoTop from '../components/LogoTop';
import BootCampCarousel from '../components/BootCampCarousel';


class JobFair extends Component {

  render() {
    return (
      <div>
        <LogoTop />
        <BootCampLandingPageNavbar />
        <Table />
        <BootCampCarousel />
        <TextHolder />
        
        <SidebarJobFair />
        
        

        <Footer />
      </div>
    );
  }

}

export default JobFair;
