import React, { Component } from 'react';
import "./style.css";
import { Col, Container } from '../Grid';


class Pagenotfound extends Component {

  render() {
    return (
      
       <Container>
            <div className="main">
                <h1 className="padding title">Oops! Page not found.</h1>
                <p className="padding message">
                    We can't find the page your are looking for. Please use our search bar to find something <br></br> specific, or visit our 
                    homepage at <span > <a className="link" href="http://localhost:3000/about">Case.edu.</a> </span> (If you wait a few seconds, we'll take you there <br></br>ourselves.)
                </p>
            </div>
       </Container>
      
    )
  }
}

export default Pagenotfound;