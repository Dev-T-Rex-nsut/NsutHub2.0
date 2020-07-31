import React from "react";
import '../properties/homepage.css'
import '../properties/functions'

const NavBarU = () => {
  function toggleMenu() {
    document.getElementsByClassName('openedNav')[0].classList.toggle('sidenav');
    document.getElementsByClassName('secondNav')[0].classList.toggle('collapseNav');
  }
    return (
      <div>
         <nav className="openedNav">
           <div className="nav-top">   
            <img src="https://i.pinimg.com/564x/e3/21/6b/e3216b575d5e92031eaf5c1a067f9d31.jpg" alt="NsutHub" className="navlogo"/>
            <div class="pull-right" onClick={toggleMenu}>
                <div class="bt-close">&#10060;</div>
            </div>
          </div>  
          <div className="linksCol">
            <div className="linkhover choosen"><a href="#" className="links"> Home </a></div>
            <div className="linkhover"><a href="#" className="links"> SignUp </a></div>
            <div className="linkhover"><a href="#" className="links"> SignIn </a></div>
            <div className="linkhover"><a href="#" className="links"> Join Us </a></div>
            <div className="linkhover"><a href="#" className="links"> E-books </a></div>
            <div className="linkhover"><a href="#" className="links"> Courses </a></div>
            <div className="linkhover"><a href="#" className="links"> Events </a></div>
            <div className="spaceBox"></div>
            <div className="lnk"><span><a href="#" className="links2"> About Us </a><a href="#" className="links2"> Join Us </a></span></div>
          </div>
         </nav>
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
            <div className="logo"><img className="logoimg" src="https://logoipsum.com/logo/logo-12.svg"/></div>      
            <div className="responsive">
              <div className="ink"><h2>Sign In</h2></div>
              <div className="ink2"><h2>Sign Up</h2></div>
            </div>      
         </header>
      </div>
    );
}

export default NavBarU;