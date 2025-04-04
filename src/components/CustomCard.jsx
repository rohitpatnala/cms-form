import React from "react";
import "../styles/CustomCard.css"; // custom styles

function CustomCard({ children }) {
  return <div className="custom-card">{children}</div>;
}

export default CustomCard;
