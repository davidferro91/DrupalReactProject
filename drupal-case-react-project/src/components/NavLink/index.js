import React from 'react';
import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <li className="nav-item border border-white mx-0 pr-2">
      <Link className="nav-link my-3 mx-1 p-2" to={props.mainLink}><strong className="text-wrap pr-2">{props.children}</strong></Link>
    </li>
  );
}

export default NavLink;