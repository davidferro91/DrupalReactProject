import React from 'react';

export function ImageHolder(props) {
  return (
    <div>
      <img src={props.src} alt={props.name} className={`rounded m-4 img${props.fluid ? "-fluid" : ""}`} />
    </div>
  );
}

export function VideoHolder(props) {
  return (
    <div className={props.aspectRatio ? "embed-responsive embed-responsive-" + props.aspectRatio : "embed-responsive"}>
      <iframe className="embed-responsive-item" title={props.title} src={props.src} allowfullscreen></iframe>
    </div>
  );
}

export function TextHolder(props) {
  return (
    <div>
      {props.textType === "header" ? <h2>{props.children}</h2> : <div>{props.children}</div>}
    </div>
  );
}
