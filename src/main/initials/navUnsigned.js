import React from "react";
import '../../properties/homepage.css'
import '../../properties/functions'
import {toggleMenu, moveRight} from "../../properties/functions";
import {Route, Link,BrowserRouter as Router} from "react-router-dom"
import Signin from "../user/signin"
import Signup from "../user/signup"

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
            <Link style={{textDecoration:'none'}} to="/login" ><div className="ink"><h2 style={{color:'black'}}>Sign In</h2></div></Link>
            <Link style={{textDecoration:'none'}} to="/register"><div className="ink2"><h2>Sign Up</h2></div></Link>
            </div>      
         </header>
      </div>
    );
}

export default NavBarU;