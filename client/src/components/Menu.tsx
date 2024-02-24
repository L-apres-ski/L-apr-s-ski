import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="main-menu-cont flex flex-col items-center justify-center bg-red-50">
      <h1 className="main-menu-title mt-2 p-4 text-5xl font-bold">
        Notre Menu
      </h1>
      <div className="menu-soir w-11/12 items-center justify-center bg-red-200 ">
        <h2 className="soir-title p-2 text-center text-2xl">
          <em>Le Soir</em>
        </h2>
        <div className="raclette-main-cont w-full items-center justify-center ">
          <h4>
            <em>A volonté:</em> Raclette de nos montagnes
          </h4>
          <div className="raclette-cont flex w-11/12 flex-row items-center justify-between pl-4">
            <div className="item flex-col px-6 font-semibold">
              <p>Raclette Nature</p>
              <p>Raclette Morbier</p>
              <p>Raclette Aïl des Ours</p>
              <p>Raclette Fumee</p>
              <p>Raclette Truffes</p>
            </div>
            <div className="item flex-col px-6">
              <p>23.50€/pers.</p>
              <p>25.00€/pers.</p>
              <p>27.00€/pers.</p>
              <p>29.00€/pers.</p>
              <p>34.00€/pers.</p>
            </div>
          </div>
        </div>

        <div className="raclette-main-cont items-center justify-center">
          <h4>
            <em>A volonté:</em> Fondue Bourguignonne
          </h4>
          <div className="item raclette-cont flex w-11/12 flex-row items-center justify-between px-6 pb-2 pl-4">
            <p className="font-semibold">Viande + Sauces + Frites + Salade </p>
            <p>25.00€/pers.</p>
          </div>
        </div>

        <div className="raclette-main-cont items-center justify-center">
          <h4>
            <em>A volonté:</em> Fondue Savoyarde
          </h4>
          <div className="raclette-cont flex w-11/12 flex-row items-center justify-between pl-4">
            <div className="item flex-col px-6 font-semibold">
              <p>Fondue Savoyarde</p>
              <p>Fondue Savoyarde Morilles</p>
              <p>Fondue Savoyarde Cèpes</p>
              <p>Planche de charcuterie/ 2 personnes</p>
            </div>
            <div className="item flex-col px-6">
              <p>22.00€/pers.</p>
              <p>25.00€/pers.</p>
              <p>26.50€/pers.</p>
              <p>12.00€</p>
            </div>
          </div>
        </div>

        <div className="raclette-main-cont items-center justify-center">
          <h4>Mont D'Or Chaud (en saison)</h4>
          <div className="raclette-cont flex w-11/12 flex-row items-center justify-between pl-4">
            <div className="item flex-col px-6 font-semibold">
              <p>Petit modèle/ 1 personne</p>
              <p>XXL/ 2 personnes</p>
            </div>
            <div className="item flex-col px-6">
              <p>16.00€/pers.</p>
              <p>27.00€/pers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
