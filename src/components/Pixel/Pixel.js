import React from "react";
import "./Pixel.scss";
import { Link } from "react-router-dom";
const Pixel = ({ arry }) => {
  return (
    <Link className="pixel__link" to={`/company/${arry.charityid}`}>
      <div
        className="pixel"
        id={arry.charityid}
        style={{ background: `${arry.color}`, color: `${arry.textColor}` }}
      >
        {arry.text}{" "}
      </div>
    </Link>
  );
};

export default Pixel;
