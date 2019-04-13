import React from 'react';
import './style.css';
import { Row, Col } from '../Grid';

function Dropdown(props) {
  return (
    <li className="nav-item dropdown border border-white mx-0 pr-2" >
      <Row>
        <Col size={"sm-auto lg-9"}>
          <a className="nav-link my-3 mr-1 p-2" href={props.mainLink} id="navbarDropdown">
            <strong className="text-wrap pr-2">{props.children}</strong>
          </a>
        </Col>
        <Col size={"xs-1"}>
          <i className="fas fa-angle-down py-4 mr-1 pr-1"></i>
        </Col>
      </Row>
      <div className="dropdown-content">
        {props.links.map(link => (
          <div key={link.title}>
            <div className="dropdown-divider m-0 p-0"></div>
            <a className="dropdown-item p-3" href={link.url} key={link.title}>{link.title}</a>
            <div className="dropdown-divider m-0 p-0"></div>
          </div>
        ))}
      </div>
    </li>
  );
}

export default Dropdown;