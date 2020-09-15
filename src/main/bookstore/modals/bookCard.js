import React from "react"
import "./bookCard.css"

function BookCard(props){
  return (
      <div className="card">
          <img className="bkimg" src={props.result.img1}/>
          <div className="details">
              <h3 className="bkname">{props.result.title}</h3>
              <h4 className="dt"><b className="ftre">Author:</b>     {props.result.author}</h4>
              <h4 className="dt"><b className="ftre">Owner:</b>      {props.result.uploadDate}</h4>
              <h4 className="dt"><b className="ftre">Edition:</b>    {props.result.edition}</h4>
              <h4 className="dt"><b className="ftre">Price:</b>      {props.result.price}</h4>
              <h4 className="dt"><b className="ftre">Phone no:</b>   {props.result.contact}</h4>
          </div>
      </div>
  );
}

export default BookCard