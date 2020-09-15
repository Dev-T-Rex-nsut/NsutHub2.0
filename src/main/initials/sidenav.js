import React from "react"
import {moveRight} from "../../properties/functions"
import "../../properties/functions"
import {Link, Route,BrowserRouter as Router} from 'react-router-dom'

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
       <Router>
         <div className ="linkhover choosen"><Link path="/" className="links"> Home </Link></div>
         <div className ="linkhover"><Link to="/register" className="links"> SignUp </Link></div>
         <div className ="linkhover"><Link to="/login" className="links"> SignIn </Link></div> 
         <div className ="linkhover"><Link to="/joinus" className="links"> Join Us </Link></div>
         <div className ="linkhover"><Link to="/books" className="links"> E-books </Link></div>
         <div className ="linkhover"><Link to="/freecourses" className="links"> Courses </Link></div>
         <div className ="linkhover"><Link to="/events" className="links"> Events </Link></div>
         <div className ="spaceBox"></div>
         <div className ="lnk"><span><a href="#" className="links2"> About Us </a><a href="#" className="links2"> Join Us </a></span></div>
       </Router>
       </div>
      </nav>
    )
}

export default Sidenav