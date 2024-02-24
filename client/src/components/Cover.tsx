import React from "react";
import cover from "../assets/raclette.jpg";
import "./Cover.css";
import secCover from "../assets/Fondue-Toulouse©M.studio-AdobeStock.jpeg";

export default function Cover() {
  return (
    <div className="image-container w-full">
      <img className="w-full sm:hidden" src={cover} alt="" />
      <img className=" w-full " src={secCover} alt="" />
    </div>
  );
}
