import React from "react";
import cover from "../assets/charcuterie.jpeg"
import "./Cover.css"

export default function Cover(){
  return(
    <div className="image-container">
      <img className="w-full" src={cover} alt="" />
    </div>
  )
}