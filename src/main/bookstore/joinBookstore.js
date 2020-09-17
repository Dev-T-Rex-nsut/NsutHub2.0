import React from "react"
import { Button } from "react-bootstrap"
import "./bookstorejoin.css"

const JoinBookStore = () =>{
    return (
        <>
          <div className="join moveRt">
              <h2>We have all the books you need </h2>
              <div className="jnCard">
              <Button className="jnBtn">
                 Buy a Book
              </Button>
              </div>
              <div className="jnCard">
              <Button className="jnBtn">
                  Sell A Book
              </Button>
              </div>
           </div>
        </>
    );
}

export default JoinBookStore