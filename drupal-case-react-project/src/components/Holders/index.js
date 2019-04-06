import React from 'react';

export function ImageHolder(props) {
  return (
    <div>
      <img src={props.src} alt={props.name} className={`rounded img${props.fluid ? "-fluid" : ""}`} />
      {props.height ? height=props.height : null}
      {props.width ? width=props.width : null}
    </div>
  );
}

export function VideoHolder(props) {
  return (
    <div className={props.aspectRatio ? "embed-responsive embed-responsive-" + props.aspectRatio : "embed-responsive"}>
      <iframe className="embed-responsive-item" src={props.src} allowfullscreen></iframe>
    </div>
  );
}
