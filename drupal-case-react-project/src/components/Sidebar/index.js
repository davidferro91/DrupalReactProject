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
              <h2 className="sidebar-header">{this.props.title}</h2>
            </a>
            {/*array state manipulation here depending on the php drupal data coming in*/}
            <ul className="page-sidebar-menu" >
              {/*the array is passed in as a prop to the sidebar element
              we can now loop through the array, create a list element for each element in the array 
              and then populate the listitems content prop with the content from the corresponding element 
              in the array*/}
              <ListElem href='index.html'/>
            </ul>
          </div>
        </nav>
      </Col>
    )
  }
}

export default Sidebar;


