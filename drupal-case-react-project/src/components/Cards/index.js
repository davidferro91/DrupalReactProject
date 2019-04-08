import React from 'react';
import './style.css';
import { Container, Col } from '../Grid';

class Cards extends React.Component {
    render() {

      return (
        <Container>
            <Col size={"lg-12"}>
            <div class="card" className="card1">
                <img src={require("./images/industry.jpg")} alt="Industry" className="card1"/> 
        <h3 class="card-title">Let Us Help</h3>
            {/* <h5 class="card-subtitle"></h5> */}
            <p>Lorem ipsum ahfoaj hfohfoh hofhqo hor3hc</p>
            </div>

            
            </Col>
        </Container>
      );
    }
  };

  export default Cards;