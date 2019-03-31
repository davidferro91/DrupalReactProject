import React from 'react';

function NavLink(props) {
  return (
    <li className="nav-item border border-white mx-0 p-2">
      <a className="nav-link my-3 mx-1 p-2" href={props.mainLink}><strong className="text-wrap">{props.children}</strong></a>
    </li>
  );
}

export default NavLink;