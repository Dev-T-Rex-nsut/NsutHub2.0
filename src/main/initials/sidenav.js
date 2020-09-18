import React from "react"
import {moveRight} from "../../properties/functions"
import "../../properties/functions"
import {Link} from 'react-router-dom'

const Sidenav = () => {
    return (
        <nav className ="closedNav">
          <div className ="nav-top">   
           <img style={{borderRadius:'0px'}} src ="https://i.pinimg.com/564x/e3/21/6b/e3216b575d5e92031eaf5c1a067f9d31.jpg" alt="NsutHub" className="navlogo"/>
           <div class ="pull-right" >
               <div class ="bt-close" onClick={moveRight}>&#10060;</div>
           </div>
       </div>  
       <div className ="linksCol">
         <div className ="linkhover choosen"><Link to="/" style={{textDecoration: "none"}} className="links"> Home </Link></div>
         <div className ="linkhover"><Link to="/register" style={{textDecoration: "none"}} className="links"> SignUp </Link></div>
         <div className ="linkhover"><Link to="/login" style={{textDecoration: "none"}} className="links"> SignIn </Link></div> 
         <div className ="linkhover"><Link to="/joinus" style={{textDecoration: "none"}} className="links"> Join Us </Link></div>
         <div className ="linkhover"><Link to="/books" style={{textDecoration: "none"}} className="links"> E-books </Link></div>
         <div className ="linkhover"><Link to="/freecourses" style={{textDecoration: "none"}} className="links"> Courses </Link></div>
         <div className ="linkhover"><Link to="/events" style={{textDecoration: "none"}} className="links"> Events </Link></div>
         <div className ="spaceBox"></div>
         <div className ="lnk"><span><Link to="/aboutus" style={{textDecoration: "none"}} className="links2"> About Us </Link><a href="#" className="links2"> Join Us </a></span></div>
       </div>
      </nav>
    )
}

export default Sidenav