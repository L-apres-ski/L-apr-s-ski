import React from "react";
import cover from "../assets/charcuterie.jpeg"
import "./Cover.css"

export default function Cover(){
  return(
    <div className="image-container">
      <img className="w-full" src={cover} alt="" />
      {/* <h1 className="overlay-text header-title text-white flex items-center justify-center text-8xl leading-relaxed p-5 pt-7 w-auto font-bold tracking-wider h-full shadow-9xl">L'apres<br/>Ski</h1> */}
    </div>
  )
}