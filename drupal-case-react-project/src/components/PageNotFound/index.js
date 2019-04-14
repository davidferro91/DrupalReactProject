import React, { Component } from 'react';
import "./style.css";
import { Container, Col } from '../Grid';
import { Link } from 'react-router-dom';


class Pagenotfound extends Component {

  render() {
    return (

      <Container>
        <div className="main">
          <h1 className="padding title">Oops! Page not found.</h1>
          <Col size="md-10">
            <p className="padding message">
              We can't find the page your are looking for. Please use our search bar to find something specific, or visit our
                      homepage at 
              <span>
                <Link className="link" to="/"> case.edu/research.</Link>
              </span>
            </p>
          </Col>
        </div>
      </Container>

    )
  }
}

export default Pagenotfound;