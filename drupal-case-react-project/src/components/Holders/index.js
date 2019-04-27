import React from 'react';
import './style.css';

export function ImageHolder(props) {
  return (
    <div className="image-holder">
      <img src={props.src} alt={props.name} className={`rounded m-4 img${props.fluid ? "-fluid" : ""}`} />
    </div>
  );
}

export function SplitImageHolder(props) {
  return (
      <div className="split-image-holder">
        <img src={props.src1} alt={props.name1} className="img-fluid float-left" style={{ width: "50%",
      height:"50vh" }} />
        <img src={props.src2} alt={props.name2} className="img-fluid float-right" style={{ width: "50%", height:"50vh" }} />
      </div>
  );
}

export function CaptionImageHolder(props) {
  return (
    <div className="caption-image-holder">
      <img src={props.src} alt={props.name} className={`m-4 img${props.fluid ? "-fluid" : ""}`} />
      <div className="image-caption d-none d-md-block">
        <p>{props.caption}</p>
      </div>
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
      {props.textType === "header" ? <h2>{props.children}</h2> : <div className="text-holder">{props.children}</div>}
    </div>
  );
}
