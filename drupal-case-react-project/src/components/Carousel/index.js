import React from 'react';
import "./style.css";
import { Container } from '../Grid';

function Carousel(props) {
  return (
    <Container>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div key={props.mainImage.name} className="carousel-item active">
            <img className="d-block w-100 custom-size" src={props.mainImage.src} alt={props.mainImage.name} />
            <div className="carousel-caption d-none d-md-block carousel-background">
              <p>{props.mainImage.name}</p>
            </div>
          </div>
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
    </Container>
  )
}

export default Carousel;