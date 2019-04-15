import React from 'react';
import "./style.css";
import { Col } from '../Grid';

function BootCampCarousel(props) {

  return (
      <Col size={"lg-12"}>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 car-image" src={props.src1} alt="First slide" />
              <div className="carousel-caption d-none d-md-block carousel-background">
                  <p>{props.header1}</p>
              </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100 car-image" src={props.src2} alt="Second slide" />
                <div className="carousel-caption d-none d-md-block carousel-background">
                  <p>{props.header2}</p>
                </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 car-image" src={props.src3} alt="Third slide" />
              <div className="carousel-caption d-none d-md-block carousel-background">
                  <p>{props.header3}</p>
                </div>
            </div>
          </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </Col>
  )
}

export default BootCampCarousel;