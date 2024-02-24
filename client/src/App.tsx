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
import Other from "./components/Other";
import Resa from "./components/Reservation";
import Hamburger from "./components/Hamburger";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Stalemate&display=swap"
        rel="stylesheet"
      ></link>
      <div className="head-cont">
        <Header />
        <Hamburger />
      </div>
      <Cover />
      <div className="info-cont">
        {/* <Adress />
        <Navbar />
        <Horaires /> */}
        <Resa />
        <Other />
        <Menu />
      </div>
    </div>
  );
}

export default App;
