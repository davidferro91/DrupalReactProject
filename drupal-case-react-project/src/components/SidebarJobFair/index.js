import React, { Component } from 'react';
import "./style.css";
import { Col } from '../Grid';
import ListElem from '../SidebarListElem';

class SidebarJobFair extends Component {

  render() {
    return (
      <Col size={"lg-3 md-3 sm-12 xs-12"}>
        <nav className="" aria-label="Sidebar Menu">
          <div className="page-sidebar">
            <a href="demo_sidebar1.html">
              <h1 className="sidebar-header">Career Development</h1>
              
              
            
              
            </a>
            <ul className="page-sidebar-menu" >
              <ListElem href='index.html' parentClass='nav-item' childClass='nav-link' />
            </ul>
          </div>
        </nav>
      </Col>
    )
  }
}

export default SidebarJobFair;
