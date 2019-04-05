import React, { Component } from 'react';
import "./style.css";
import { Row, Container, Col } from '../Grid';

class Carousel extends Component {
    
    render() {
        return(
            <Container>
                <Col size={"lg-8"}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100 custom-size" src={require("../../images/brennan-burling-1473464-unsplash.jpg")} alt="First slide" />
                                <div className="carousel-caption d-none d-md-block carousel-background">
                                    <p>Sample Text</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 custom-size" src={require("../../images/brennan-burling-1473464-unsplash.jpg")} alt="First slide" />
                                <div className="carousel-caption d-none d-md-block carousel-background">
                                    <p>Sample Text</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 custom-size" src={require("../../images/tyler-casey-1474093-unsplash.jpg")} alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block carousel-background">
                                    <p>Sample Text</p>
                                </div>
                            </div>
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
}

export default Carousel;
