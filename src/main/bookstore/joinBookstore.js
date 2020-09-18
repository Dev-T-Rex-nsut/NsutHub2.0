import React from "react"
import { Button } from "react-bootstrap"
import "./bookstorejoin.css"
import {Link} from "react-router-dom";
import Footer from "../initials/footer";

const JoinBookStore = () =>{
    return (
        <>
          <div className="join moveRt">
              <h2>We have all the books you need </h2>
              <div className="jnCard">
              <Button className="jnBtn">
                 <Link to="/login" style={{color:"white"}}>Buy a Book</Link>
              </Button>
              </div>
              <div className="jnCard">
              <Button className="jnBtn">
                <Link  to="/login" style={{color:"white"}}>  Sell A Book </Link>
              </Button>
              </div>
           </div>
           <Footer/>
        </>
    );
}

export default JoinBookStore