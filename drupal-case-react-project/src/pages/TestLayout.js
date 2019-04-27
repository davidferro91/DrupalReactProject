import React, { Component } from 'react';
// import Layout1 from '../layouts/Layout1';
// import Layout2 from '../layouts/Layout2';
// import Layout3 from '../layouts/Layout3';
import Layout4 from '../layouts/Layout4';

class TestLayout extends Component {

  images=[
    "https://case.edu/rnc/img/cleveland-bg.jpg",
    "https://www.bestcounselingdegrees.net/wp-content/uploads/2017/08/case-western-reserve-university-ph-d-in-clinical-psychology.jpg",
    "https://dailymedia.case.edu/wp-content/uploads/2016/08/18153849/cwru-sign.jpg",
    "https://s3-prod.crainscleveland.com/s3fs-public/health_education_campus_rendering_1.jpg",
    "https://www.eurospa.com/resourcefiles/mainimages/calistoga-hotel-napa-valley-hot-air-balloon-ride-package-top.jpg",
    "https://thought-leadership-production.s3.amazonaws.com/2016/10/28/14/29/18/d9cc4e0b-ba5c-44b6-9b4d-5feffab18b26/tnc_56094809_preview_cropped.jpg"
  ]


  render() {
    return(
      <div>
        <Layout4
          pageTitle="This is a Test" 
          splitImage1={this.images[3]}
          splitImageName1="Image 1"
          splitImage2={this.images[2]}
          splitImageName2="Image 2"
          calendarEvents={[
            { month: "Apr", day: "30", description: "This is a description" },
            { month: "May", day: "02", description: "Here is another description" }
          ]}
          node="1401"
        />
      </div>
    );
  }
}

export default TestLayout;