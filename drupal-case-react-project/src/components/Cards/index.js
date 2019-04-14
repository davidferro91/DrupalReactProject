import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export function ImageCard(props) {
  return (
    <div className="card" key={props.name}>
      <img src={props.src} className="card-img-top" alt={props.name} />
      <div className="card-body p-0 m-0">
        <h4 className="card-title">{props.name}</h4>
        <div className="card-text">{props.children}</div>
      </div>
      <div className="card-footer">
        <Link className="card-link" to={props.link}><b className="text-center">{props.linkName}</b></Link>
      </div>
    </div>
  );
}

export function TextCard(props) {
  return (
    <div className="card" key={props.name}>
      <div className="card-header">
        <h4 className="card-title p-1">{props.name}</h4>
      </div>
      <div className="card-body p-0 m-0">
        <div className="card-text">{props.children}</div>
      </div>
      <div className="card-footer">
        <Link className="card-link" to={props.link}><b>{props.linkName}</b></Link>
      </div>
    </div>
  );
}
