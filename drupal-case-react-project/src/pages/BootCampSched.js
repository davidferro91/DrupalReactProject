import React, { Component } from 'react';
import { Container } from '../components/Grid';
import LogoTop from '../components/LogoTop';
import BootCampLandingPageNavbar from '../components/BootCampLandingPageNav';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import { TextHolder, ImageHolder }from '../components/Holders';

class BootCampSched extends Component {

  render() {
    return (
      <div>
        <LogoTop />
        <BootCampLandingPageNavbar/>
        <div className='mt-3'> 
          <Carousel 
          header1="Web Development" 
          header2="Data Bootcamp" 
          header3="Cybersecurity Bootcamp"
          src1="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/homepage_hero_coding.jpg"
          src2="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/homepage_hero_data.jpg"
          src3="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/img_hero.jpg"
          />
        </div>
        <div className='mt-3'>
          <Container>
              <TextHolder textType={'header'}></TextHolder>
          </Container>
        </div>
        <Footer/>
      </div>
    );
  }

}

export default BootCampSched;
