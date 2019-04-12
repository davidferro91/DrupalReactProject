import React from 'react';
import { Container, Row, Col } from '../Grid';
import './style.css';


class Parallax extends React.Component {
    render() {
      return (
        <Container>
            <Row>
            <Col size={"md-10"}>
        <body>
         
          <div className="parallax" />
          <div style={{height: '1000px', fontSize: '36px'}}>
           
          </div>
        
        </body>
        
        </Col>
        </Row>
          </Container> 
      );
    }
  };

  export default Parallax;