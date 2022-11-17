import React from "react";

const SingleCard = (props) => {
const { title, totalNumber, icon, color } = props.item;
return (
<div className="single__card" style={{backgroundImage: color}}>
  <div className="card__content">
    <h4>{title}</h4>
    <span>{totalNumber}+</span>
  </div>

  <span className="card__icon">
  <i className={icon}></i>
  </span>
</div>
);
};

export default SingleCard;
