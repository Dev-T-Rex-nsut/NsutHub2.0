import React from "react"
import { Button } from "react-bootstrap"
import "./bookstorejoin.css"
import {Link} from "react-router-dom";

const JoinStudentClub = () =>{
    return (
        <>
          <div className="join moveRt">
              <h2>We have all the books you need </h2>
              <div className="jnCard">
              <Button className="jnBtn">
                 <Link to="/" style={{color:"white"}}>Join A Club</Link>
              </Button>
              </div>
              <div className="jnCard">
              <Button className="jnBtn">
                <Link  to="/login" style={{color:"white"}}>Make A Club</Link>
              </Button>
              </div>
           </div>
        </>
    );
}

export default JoinStudentClub