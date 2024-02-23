import React from "react";
import "./NavBar.css"

export default function Navbar(){
  return(
    <div className="nav-cont flex w-full flex-row items-between justify-between border">
      <p className="btn  text-lg flex-1 ">Reservation: 06 24 69 98 72</p>
      <button className="btn w-1/4 text-center text-xl flex-2 font-extrabold">Menu</button> 
    </div>
  )
}