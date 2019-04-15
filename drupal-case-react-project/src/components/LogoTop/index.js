import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Container } from '../Grid';

function LogoTop() {
  return (
    <nav className="navbar navbar-light background-nav">
      <Container>
        <Link className="navbar-brand" to="/">
          <img src="https://dudbm6bcnmy8e.cloudfront.net/cwru-drupal-assets/images/cwru-logo.svg" width="265" height="40" alt="CWRU Logo" />
        </Link>
      </Container>
    </nav>
  )
}

export default LogoTop;