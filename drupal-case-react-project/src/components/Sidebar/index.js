import React, { Component } from 'react';
import "./style.css";
import { Col } from '../Grid';
import ListElem from '../SidebarListElem';

class Sidebar extends Component {

  state = {
    listitems: []
  }
  
  //put a componentDidMount function here that loads the data

  render() {
    return (
      <Col size={"lg-3 md-3 sm-12 xs-12"}>
        <nav className="" aria-label="Sidebar Menu">
          <div className="page-sidebar">
            <a href="demo_sidebar1.html">
              <h2 className="sidebar-header">{this.props.sidebartitle}</h2>
            </a>
            {/*some sort of array state manipulation here depending on the php drupal data coming in*/}
            <ul className="page-sidebar-menu" >
              <ListElem content="Testing" href='index.html'/>
              <ListElem content="Testing" href='index.html'/>
              <ListElem content="Testing" href='index.html'/>
              <ListElem content="Testing" href='index.html'/>
              <ListElem content="Testing" href='index.html'/>
              <ListElem content="Testing" href='index.html'/>
              <ListElem content="Testing" href='index.html'/>
              <ListElem content="Testing" href='index.html'/>
              <ListElem content="Testing" href='index.html'/>
              <ListElem content="Testing" href='index.html'/>
            </ul>
          </div>
        </nav>
      </Col>
    )
  }
}

export default Sidebar;


