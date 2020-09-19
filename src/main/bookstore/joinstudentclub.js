import React from "react"
import { Button } from "react-bootstrap"
import "./bookstorejoin.css"
import {Link} from "react-router-dom";
import Footer from "../initials/footer";

const JoinStudentClub = () =>{
    return (
        <>
          <div className="join moveRt">
              <h2>Connect with like minded persons </h2>
              <div className="jnCard">
              <Button className="jnBtn">
                 <Link to="/club" style={{color:"white"}}>Join A Club</Link>
              </Button>
              </div>
              <div className="jnCard">
              <Button className="jnBtn">
                <Link  to="/login" style={{color:"white"}}>Make A Club</Link>
              </Button>
              </div>
           </div>
           <Footer/>
        </>
    );
}

export default JoinStudentClub