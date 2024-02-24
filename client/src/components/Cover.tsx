import React from "react";
import cover from "../assets/raclette.jpg"
import "./Cover.css"

export default function Cover(){
  return(
    <div className="image-container">
      <img className="w-full" src={cover} alt="" />
    </div>
  )
}