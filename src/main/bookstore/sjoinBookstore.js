import React from "react"
import { Button } from "react-bootstrap"
import "./bookstorejoin.css"
import {Link} from "react-router-dom";

const SJoinBookStore = () =>{
    return (
        <>
          <div className="join moveRt">
              <h2>We have all the books you need </h2>
              <div className="jnCard">
              <Button className="jnBtn">
                 <Link to="/" style={{color:"white"}}>Buy a Book</Link>
              </Button>
              </div>
              <div className="jnCard">
              <Button className="jnBtn">
                <Link  to="/upload" style={{color:"white"}}>  Sell A Book </Link>
              </Button>
              </div>
           </div>
        </>
    );
}

export default SJoinBookStore