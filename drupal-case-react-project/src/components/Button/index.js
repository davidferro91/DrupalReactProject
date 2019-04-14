import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Button (props) {
  return (
    <div className="button">
      <Link to={props.link}>{props.name}</Link>
    </div>
  );
}

export default Button;
