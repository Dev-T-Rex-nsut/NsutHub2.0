import React from "react"
import { Button } from "react-bootstrap"
import "./bookstorejoin.css"
import Footer from "../initials/footer"
import {Link} from "react-router-dom";

const SJoinBookStore = () =>{
    return (
        <>
          <div className="join moveRt">
              <h2>We have all the books you need </h2>
              <div className="jnCard">
              <Button className="jnBtn">
                 <Link to="/booksearch" style={{color:"white"}}>Buy a Book</Link>
              </Button>
              </div>
              <div className="jnCard">
              <Button className="jnBtn">
                <Link  to="/upload" style={{color:"white"}}>  Sell A Book </Link>
              </Button>
              </div>
           </div>
           <Footer/>
        </>
    );
}

export default SJoinBookStore