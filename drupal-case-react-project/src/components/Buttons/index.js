import React from 'react';
import './style.css';
import { Container, Col } from '../Grid';

class Buttons extends React.Component {
    render() {

      return (
        <Container>
            <Col size={"lg-12"}>
            <div class="row my-row" className="button1"> 
                Let Us Help
            </div>
            <div class="row my-row" className="button2">
                Find More Information
            </div>
            <div class ="row my-row" className="button3">
                See What's Available
            </div>
            <div class="row my-row" className="button4">
                Read More News
            </div>
            </Col>
        </Container>
      );
    }
  };

  export default Buttons;
