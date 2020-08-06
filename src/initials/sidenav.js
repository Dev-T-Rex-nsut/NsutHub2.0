import React from "react"
import {moveRight} from "../properties/functions"
import "../properties/functions"
const Sidenav = () => {
    return (
        <nav className ="closedNav">
          <div className ="nav-top">   
           <img src ="https://i.pinimg.com/564x/e3/21/6b/e3216b575d5e92031eaf5c1a067f9d31.jpg" alt="NsutHub" className="navlogo"/>
           <div class ="pull-right" >
               <div class ="bt-close" onClick={moveRight}>&#10060;</div>
           </div>
       </div>  
       <div className ="linksCol">
         <div className ="linkhover choosen"><a href="#" className="links"> Home </a></div>
         <div className ="linkhover"><a href="#" className="links"> SignUp </a></div>
         <div className ="linkhover"><a href="#" className="links"> SignIn </a></div>
         <div className ="linkhover"><a href="#" className="links"> Join Us </a></div>
         <div className ="linkhover"><a href="#" className="links"> E-books </a></div>
         <div className ="linkhover"><a href="#" className="links"> Courses </a></div>
         <div className ="linkhover"><a href="#" className="links"> Events </a></div>
         <div className ="spaceBox"></div>
         <div className ="lnk"><span><a href="#" className="links2"> About Us </a><a href="#" className="links2"> Join Us </a></span></div>
       </div>
      </nav>
    )
}

export default Sidenav