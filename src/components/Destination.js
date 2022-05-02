import React from "react";

export default function Destination(props) {
  console.log(props);
  return (
    <div>
      <img src={props.imageUrl} />
      <h3>{props.location}</h3>
      <h3>{props.title}</h3>
      <h3>
        {props.startDate} {props.endDate}
      </h3>
      <h3>{props.description}</h3>
    </div>
  );
}
