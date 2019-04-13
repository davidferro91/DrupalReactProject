import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export function ImageCard(props) {
  return (
    <div className="card" key={props.name}>
      <img src={props.src} class="card-img-top" alt={props.name} />
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">{props.children}</p>
      </div>
      <div className="card-footer">
        <Link className="card-link" to={props.link}>{props.linkName}</Link>
      </div>
    </div>
  );
}

export function TextCard(props) {
  return (
    <div className="card" key={props.name}>
      <div className="card-header">
        <h3 className="card-title">{props.name}</h3>
      </div>
      <div className="card-body">
        <p className="card-text">{props.children}</p>
      </div>
      <div className="card-footer">
        <Link className="card-link" to={props.link}><b>{props.linkName}</b></Link>
      </div>
    </div>
  );
}
