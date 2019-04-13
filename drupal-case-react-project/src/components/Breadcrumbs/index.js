import React from 'react';
import { Container } from '../Grid';
import './style.css';

function Breadcrumbs(props) {
  return (
    <Container>
      <ol className="breadcrumb">
        {props.links.map(link => (
          <li key={link.title}>
            <a key={link.title} href={link.url}>{link.title}</a>
          </li>
        ))}
        <li className="breadcrumb-item active">
          {props.mainTitle}
        </li>
      </ol>
      <hr className="mt-0 mb-2"/>
    </Container>
  );
}

export default Breadcrumbs;
