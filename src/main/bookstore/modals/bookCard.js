import React from "react"
import "./bookCard.css"
import {Link} from "react-router-dom";

function BookCard(props){
  return (
      <Link to={`/bookdetails/${props.result.bookid}`}>
      <div className="card">
          <img className="bkimg" src={`data:image/png;base64,${props.result.img1}`}/>
          <div className="details">
              <h3 className="bkname">{props.result.name}</h3>
              <h4 className="dt"><b className="ftre">Author:</b>     {props.result.author}</h4>
              <h4 className="dt"><b className="ftre">Edition:</b>    {props.result.edition}</h4>
              <h4 className="dt"><b className="ftre">Price:</b>      {props.result.price}</h4>
              <h4 className="dt"><b className="ftre">Phone no:</b>   {props.result.contact}</h4>
          </div>
      </div>
      </Link>
  );
}

export default BookCard