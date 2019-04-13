import React from 'react';
import './style.css';
import { Row, Col } from '../Grid';
import { Link } from "react-router-dom";


function Dropdown(props) {
  return (
    <li className="nav-item dropdown border border-white mx-0 pr-2" >
      <Row>
        <Col size={"sm-auto lg-9"}>
          <Link className="nav-link my-3 mr-1 p-2" to={props.mainLink} id="navbarDropdown">
            <strong className="text-wrap pr-2">{props.children}</strong>
          </Link>
        </Col>
        <Col size={"xs-1"}>
          <i className="fas fa-angle-down py-4 mr-1 pr-1"></i>
        </Col>
      </Row>
      <div className="dropdown-content">
        {props.links.map(link => (
          <div key={link.title}>
            <div className="dropdown-divider m-0 p-0"></div>
            <Link className="dropdown-item p-3" to={link.url} key={link.title}>{link.title}</Link>
            <div className="dropdown-divider m-0 p-0"></div>
          </div>
        ))}
      </div>
    </li>
  );
}

export default Dropdown;