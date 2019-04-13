import React from 'react';
import "./style.css";
import { Container, Col } from '../Grid';

function Carousel(props) {

  return (
    <Container>
      <Col size={"lg-8"}>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {props.imageItems.map(imageItem => (
              <div key={imageItem.name} className="carousel-item">
                <img className="d-block w-100 custom-size" src={imageItem.src} alt={imageItem.name} />
                <div className="carousel-caption d-none d-md-block carousel-background">
                  <p>{imageItem.name}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Col>
    </Container>
  )
}

export default Carousel;
