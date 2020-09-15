import React from 'react';
import NavBarU from './main/initials/navUnsigned'
import Home from './main/home'
import Sidenav from './main/initials/sidenav';
import "./properties/homepage.css"
import { moveRight } from './properties/functions';

function App() {
  return (
    <div className="App">
        <Sidenav/>
        <NavBarU/> 
        <div className="stick" onClick={moveRight}>
        <Home/> 
        </div>
    </div>
  );
}

export default App;
