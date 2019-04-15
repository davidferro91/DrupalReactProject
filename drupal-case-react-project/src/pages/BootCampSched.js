import React, { Component } from 'react';

import { Col } from '../components/Grid';
import LogoTop from '../components/LogoTop';
import BootCampLandingPageNav from '../components/BootCampLandingPageNav';
import BootCampCarousel from '../components/BootCampCarousel';
import Footer from '../components/Footer';
import { TextHolder }from '../components/Holders';

class BootCampSched extends Component {

  render() {
    return (
      <div>
        <LogoTop />
        <BootCampLandingPageNav />
        <div className='mt-3'> 
          <BootCampCarousel
            header1="Web Development" 
            header2="Data Bootcamp" 
            header3="Cybersecurity Bootcamp"
            src1="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/homepage_hero_coding.jpg"
            src2="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/homepage_hero_data.jpg"
            src3="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/img_hero.jpg"
            />
        </div>
        <div className='mt-3'>
            <Col size={'lg-9'}>
              <TextHolder textType={'header'}>Why Get Skills-based Training at CWRU Boot Camps</TextHolder>
              <TextHolder>
                <div className="bootcamp-desc">
                  Our classes get students ready with the in-demand skills they need to advance 
                  or start a career in coding, data analytics, or cybersecurity. 
                  We combine an in-person classroom experience with dynamic 
                  tutorials and curricula taught by experienced instructors. 
                  With extensive student support and a wide array of resources, 
                  we provide an education that trains and helps you find a path to success.
                </div>
                <br />
                
                Case Western Reserve Certificate of Completion Overview
                <ul>
                  <li>Our curricula teach the latest market skills* for the fields of web development, data analytics, and cybersecurity.</li>
                  <li>Students benefit from a wide list of support services to help them navigate the program.</li>
                  <li>Students build a diverse portfolio of web applications, projects, or learn skills applicable to certifications that demonstrate their knowledge.</li>
                  <li>All of our boot camps offer convenient part-time schedules for students who wish to stay at their current job while learning valuable new skills.</li>
                </ul>
              </TextHolder>
            </Col>
        </div>
        <Footer/>
      </div>
    );
  }

}

export default BootCampSched;
