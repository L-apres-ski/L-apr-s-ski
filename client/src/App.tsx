import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navbar from './components/NavBar';
import Cover from './components/Cover';
import Bottom from './components/Bottom';
import Adress from './components/Adress';

function App() {
  return (
    <div className="App flex justify-center items-center flex-col">
      <Cover/>
      <Header/>
      <Navbar/>
      {/* <Bottom/> */}
      <Adress/>
    </div>
  );
}

export default App;
