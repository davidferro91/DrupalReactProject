import React, { Component } from 'react';
import '../components/BootCampLandingPageNav';
import BootCampLandingPageNavbar from '../components/BootCampLandingPageNav';
import Footer from '../components/Footer';
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
        <div className='mt-3'> 
          <BootCampCarousel
            header1="Employer Ready" 
            header2="Real World Skills" 
            header3="Career Development"
            src1="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2017/12/teachers-1140x440.jpg"
            src2="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2017/12/progoverview-1140x440.jpg"
            src3="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/cyber_curriculum.jpg"
            />
        </div>
        <Table />
        <TextHolder textType={'header'}>Benefits of Attending</TextHolder>
        <TextHolder>
                <div className="bootcamp-desc">
                When you attend a career fair, you will learn about jobs and meet with employers who are hiring. 
                The career fair is a great opportunity to learn what employers need.
                Regardless of your major, year in college, or future goals, there are numerous benefits to attending a career fair. Career fairs provide opportunities to:
                </div>
                <br />
                
                Case Western Reserve Certificate of Completion Overview
                <ul>
                  <li>Get first-hand information about a company/organization from a representative. You're likely to get more valuable and accurate information from an employee than you could ever get from a web site.</li>
                  <li>Students benefit from a wide list of support services to help them navigate the program.</li>
                  <li>Make a positive and lasting impression with employers. Begin to establish your professional image by distinguishing yourself from other candidates.</li>
                  <li>Effectively practice professional communication with recruiters and other future colleagues.</li>
                </ul>
              </TextHolder>
        
        

        <Footer />
      </div>
    );
  }

}

export default JobFair;