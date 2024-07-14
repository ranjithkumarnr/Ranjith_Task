import React from "react";

const Card = ({ title, value ,icon}) => {
  return (
    <div className="card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
  );
};

export default Card;
