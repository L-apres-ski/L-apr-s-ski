import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Navbar from "./components/NavBar";
import Cover from "./components/Cover";
import Bottom from "./components/Bottom";
import Adress from "./components/Adress";
import Horaires from "./components/Horaires";
import Pres from "./components/Pres";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      <div className="head-cont">
        <Header />
      </div>
      <Cover />
      <div className="info-cont">
        <Adress />
        <Navbar />
        <Horaires />
        <Pres />
        <Menu />
      </div>
    </div>
  );
}

export default App;
