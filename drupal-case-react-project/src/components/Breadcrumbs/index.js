import React from 'react';
import { Container } from '../Grid';
import './style.css';

function Breadcrumbs(props) {
  return (
    <Container>
      <ol className="breadcrumb">
        {props.links.map(link => (
          <li>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
        <li className="breadcrumb-item active">
          {props.mainTitle}
        </li>
      </ol>
    </Container>
  );
}

export default Breadcrumbs;
