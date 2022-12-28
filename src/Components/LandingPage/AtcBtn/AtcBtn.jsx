import React from "react";
import "./AtcBtn.css";


export const AtcBtn = ({btnName, price}) => {
  return (
    <div>
      <button className="btn">
        {`${btnName} $${price}`}
      </button>
      
    </div>
  );
};