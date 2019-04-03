import React, { Component } from 'react';
import "./style.css";
import { Col } from '../Grid';
import ListElem from '../SidebarListElem';

class Sidebar extends Component {

  render() {
    return (
      <Col size={"lg-3 md-3 sm-12 xs-12"}>
        <nav className="" aria-label="Sidebar Menu">
          <div className="page-sidebar">
            <a href="demo_sidebar1.html">
              <h2 className="sidebar-header">Sidebar Header</h2>
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

export default Sidebar;


