import React from "react"
import { Button } from "react-bootstrap"
import "./joinclub.css"

const JoinClub= () =>{
    return (
        <>
          <div className="join moveRt">
              <h2>Meet with your friends of same thinking </h2>
              <div className="jnCard">
              <Button className="jnBtn">
                 Join a club
              </Button>
              </div>
              <div className="jnCard">
              <Button className="jnBtn">
                  Make a club
              </Button>
              </div>
           </div>
        </>
    );
}

export default JoinBookStore