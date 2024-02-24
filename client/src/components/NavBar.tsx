import React from "react";
import "./NavBar.css";

export default function Navbar() {
  return (
    <div className="nav-cont items-between flex w-full flex-row justify-between border">
      <p className="btn  flex-1 bg-red-50 text-lg">
        Reservation: 06 24 69 98 72
      </p>
      <button className="btn flex-2 w-1/4 text-center text-lg font-extrabold">
        Menu
      </button>
    </div>
  );
}
