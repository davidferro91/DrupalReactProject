import React, { Component } from 'react';

import { Col, Row } from '../components/Grid';
import LogoTop from '../components/LogoTop';
import BootCampLandingPageNav from '../components/BootCampLandingPageNav';
import BootCampCarousel from '../components/BootCampCarousel';
import Footer from '../components/Footer';
import { TextHolder }from '../components/Holders';
import { TextCard } from '../components/Cards';
import Button from '../components/Button';

class BootCampSched extends Component {

  render() {
    return (
      <div>
        <LogoTop />
        <BootCampLandingPageNav />
        <div classNameName='mt-3'> 
          <BootCampCarousel
            header1="Web Development" 
            header2="Data Bootcamp" 
            header3="Cybersecurity Bootcamp"
            src1="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/homepage_hero_coding.jpg"
            src2="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/homepage_hero_data.jpg"
            src3="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/img_hero.jpg"
            />
        </div>
        <div className='mt-3 wrapper container-fluid'>
          <Row>
            <Col size={'lg-3'}>
              <div className='mb-3'>
                <TextCard name='Enrolling Now' >
                  <div className='mt-3'>
                    Coding
                    <ul>
                      <li>4/30/19 (24 Weeks)</li>
                    </ul>
                    Data
                    <ul>
                      <li>4/29/19 (24 Weeks)</li>
                    </ul>
                    Cyber
                    <ul>
                      <li>4/29/19 (24 Weeks)</li>
                    </ul>
                  </div>
                </TextCard>
              </div>
            </Col>
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
          </Row>
          <Row>
            <Col size={'lg-3'}>
              <div className='mb-3'>
                <TextCard name='About CWRU' >
                  <div className='mt-3'>
                    Case Western Reserve University 
                    improves and enriches people’s lives 
                    through research that capitalizes on the 
                    power of collaboration and education that 
                    dramatically engages our students. We 
                    realize this goal through scholarship and 
                    creative endeavor that draws on all forms of 
                    inquiry; learning that is active, creative and 
                    continuous; and promotion of an inclusive culture of global citizenship.
                  </div>
                </TextCard>
              </div>
            </Col>
            <Col size={'lg-9'}>
              <TextHolder textType={'header'}>What You Will Learn</TextHolder>
              <TextHolder>
                <div className="bootcamp-desc">
                  In our full-stack web development, data analytics, and cybersecurity programs, students will create a solid foundation of skills to help them be competitive in these industries.
                  Students participate in experiential learning opportunities, providing access to new employment possibilities.
                  Our programs provide career-planning assistance that includes portfolio or homework reviews, mock interviews, soft-skills training, job matching, and more.
                </div>
                <br />
              </TextHolder>
              <TextHolder textType={'header'}>What Graduates Recieve</TextHolder>
              <TextHolder>
                <ul>
                  <li>  
                    A Certificate of Completion from Case Western Reserve University showcasing your accomplishments to current or future employers.
                  </li>
                  <li>
                    Graduate with a robust set of hard and soft skills to help you stand out in today’s market.
                  </li>
                  <li>
                    A strong portfolio of applications in our coding and data analytics programs, and a wide set of skills applicable to industry certifications in our cybersecurity program.
                  </li>
                </ul>
              </TextHolder>
              <form>
                <TextHolder textType={'header'}>Program Info</TextHolder>
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Last Name" />
                </div>
                <Button name='Submit'/>
              </form>
          </Col>
        </Row>
      </div>
    <Footer/>
  </div>
  );
  }

}

export default BootCampSched;
