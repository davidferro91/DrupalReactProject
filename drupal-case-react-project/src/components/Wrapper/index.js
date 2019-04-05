import React from 'react';
import { Container } from '../Grid';
import './style.css';

function Wrapper(props) {
  return <Container>
    <main className="wrapper" {...props} />
  </Container>;
}

export default Wrapper;
