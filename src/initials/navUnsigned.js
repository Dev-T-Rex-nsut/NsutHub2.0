import React from "react";
import '../properties/homepage.css'
import '../properties/functions'
import {toggleMenu, moveRight} from "../properties/functions";

const NavBarU = () => {
    return (
      <div>
         <header className="secondNav">
         <div class="openSideNav" onClick={toggleMenu}>
            <div class="item bt-menu js-nav-main" data-menu-id="menu-main">
                <div class="ico-menu">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <span class="tab">MENU</span>
            </div>
        </div>
            <div className="logo" onClick={moveRight}><img className="logoimg" src="https://logoipsum.com/logo/logo-12.svg"/></div>      
            <div className="responsive">
              <div className="ink"><h2><a>Sign In</a></h2></div>
              <div className="ink2"><h2><a>Sign Up</a></h2></div>
            </div>      
         </header>
      </div>
    );
}

export default NavBarU;