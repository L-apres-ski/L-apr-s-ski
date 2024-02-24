import { useState } from "react";
import "./Hamburger.css";

export default function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="ham-cont">
      <input
        type="checkbox"
        id="checkbox1"
        className="checkbox1 visuallyHidden"
      ></input>
      <label htmlFor="checkbox1" onClick={() => setMenuOpen((prev) => !prev)}>
        <div className="hamburger hamburger1">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>
      <div
        className={`menu-nav${menuOpen ? " show-menu" : ""} ham flex  flex-col rounded-xl border-2 border-red-800 bg-red-50 `}
      >
        <button className="btn  p-4 text-lg">Adresse</button>
        <button className="btn border-y border-y-red-800 p-4 text-lg">
          Menu
        </button>
        <button className="btn p-4 text-lg">Horaires</button>
      </div>
    </div>
  );
}
