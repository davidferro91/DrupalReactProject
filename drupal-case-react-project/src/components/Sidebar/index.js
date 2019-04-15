import React from 'react';
import "./style.css";
import { Col } from '../Grid';
import ListElem from '../SidebarListElem';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  return (
    <Col size={"lg-3 md-3 sm-12 xs-12"}>
      <nav className="" aria-label="Sidebar Menu">
        <div className="page-sidebar">
          <Link to={props.titleLink}>
            <h2 className="sidebar-header">{props.title}</h2>
          </Link>
          <ul className="page-sidebar-menu" >
            {/*the array is passed in as a prop to the sidebar element
              we can now loop through the array, create a list element for each element in the array 
              and then populate the listitems content prop with the content from the corresponding element 
              in the array*/}
            {props.content.map(contentOb => (
              <ListElem link={contentOb.link} name={contentOb.name} />
            ))}
          </ul>
        </div>
      </nav>
    </Col>
  );
}

export default Sidebar;


