import React from "react";
import { Data } from "../../Data/Data";
import "./OverheadImage.css";
import { AppContext } from "../../App";
import { useContext } from "react";

const OverheadImage = () => {
  // *****************************
  // * Getting states from App
  // *****************************
  const { plotId, setPlotId } = useContext(AppContext);

  return (
    <div className="image">
      <img
        src={Data[plotId].overheadImage}
        useMap="#workmap"
        alt="Site Map"
      ></img>
    </div>
  );
};

export default OverheadImage;
