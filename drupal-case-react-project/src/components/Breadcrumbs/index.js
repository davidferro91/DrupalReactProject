import React from 'react';
import { Container } from '../Grid';
import './style.css';
import { Link } from "react-router-dom";

function Breadcrumbs(props) {
  return (
    <Container>
      <ol className="breadcrumb">
        {props.links.map(link => (
          <li key={link.title}>
            <Link key={link.title} to={link.url}>{link.title}</Link>
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
