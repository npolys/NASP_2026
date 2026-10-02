import React from "react";
import { siteMapImage } from "../../Data/Data";
import "./SiteMap.css";
import { AppContext } from "../../App";
import { useContext } from "react";

const SiteMap = () => {
  // *****************************
  // * Getting states from App
  // *****************************
  const { setPlotId } = useContext(AppContext);

  // *****************************
  // * Functions
  // *****************************
  const handlePlotPointClick = (id) => {
    setPlotId(id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="image">
      <button
        className="point1 points"
        onClick={() => handlePlotPointClick(11)}
      ></button>

      <button
        className="point2 points"
        onClick={() => handlePlotPointClick(13)}
      ></button>

      <button
        className="point3 points"
        onClick={() => handlePlotPointClick(15)}
      ></button>

      <button
        className="point4 points"
        onClick={() => handlePlotPointClick(41)}
      ></button>

      <button
        className="point5 points"
        onClick={() => handlePlotPointClick(43)}
      ></button>

      <img
        src={siteMapImage}
        width="100%"
        heigth="100%"
        useMap="#workmap"
        alt="Site Map"
      ></img>
    </div>
  );
};

export default SiteMap;
