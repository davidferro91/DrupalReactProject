import React, { Component } from 'react';
// import Layout1 from '../layouts/Layout1';
// import Layout2 from '../layouts/Layout2';
// import Layout3 from '../layouts/Layout3';
// import Layout4 from '../layouts/Layout4';
// import Layout5 from '../layouts/Layout5';
// import Layout6 from '../layouts/Layout6';
// import Layout7 from '../layouts/Layout7';
// import Layout8 from '../layouts/Layout8';
// import Layout9 from '../layouts/Layout9';
import Layout10 from '../layouts/Layout10';

class TestLayout extends Component {

  images = [
    "https://case.edu/rnc/img/cleveland-bg.jpg",
    "https://www.bestcounselingdegrees.net/wp-content/uploads/2017/08/case-western-reserve-university-ph-d-in-clinical-psychology.jpg",
    "https://dailymedia.case.edu/wp-content/uploads/2016/08/18153849/cwru-sign.jpg",
    "https://s3-prod.crainscleveland.com/s3fs-public/health_education_campus_rendering_1.jpg",
    "https://www.eurospa.com/resourcefiles/mainimages/calistoga-hotel-napa-valley-hot-air-balloon-ride-package-top.jpg",
    "https://thought-leadership-production.s3.amazonaws.com/2016/10/28/14/29/18/d9cc4e0b-ba5c-44b6-9b4d-5feffab18b26/tnc_56094809_preview_cropped.jpg",
    "https://www.franklinarts.com/media/artwork-primary/AQUA-Panoramic-Beach-Franklin-Arts.jpg",
    "https://images.wallpaperscraft.com/image/maldives_tropical_beach_90800_3840x2160.jpg",
    "https://images.wallpaperscraft.com/image/sea_water_surface_waves_118675_2560x1440.jpg",
    "https://i.pinimg.com/originals/7d/2c/65/7d2c65320726cd39abc1399e7237f348.jpg"
  ]


  render() {
    return (
      <div>
        <Layout10
          pageTitle="React Drupal Landing Page"
          parallaxImage1={this.images[1]}
          parallaxCaption1="Here's an example of what React can do with Drupal"
          carouselMainImage={{ src: this.images[9], name: "Here is an image" }}
          carouselImageItems={[
            { src: this.images[6], name: "This is a demonstration of what you can do with very few lines of code." },
            { src: this.images[7], name: "This is another demonstration of what you can do with very few lines of code." },
          ]}
          calendarEvents={[
            { month: "May", day: "09", description: "Here is an event" },
            { month: "May", day: "14", description: "Here is another event" },
          ]}
          node="1401"
        />
      </div>
    );
  }
}

export default TestLayout;