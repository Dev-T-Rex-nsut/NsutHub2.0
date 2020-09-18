import React from "react";
import "../style.css";
import {Route} from "react-router-dom"
import ProfileUpdate from "./profileUpdate";
import Footer from "../initials/footer";

class ProfileOverview extends React.Component{

  constructor(props){
    super(props)
  }
  render(){
      return (
    <div className="App moveRt">
      <div className="sidenavPro">
        <Route path="/profile" exact component={ProfileOverview}>
          <div  className="edit">
           Account Overview
          </div>
        </Route>
      </div>
      <div className="bossForm">
        <h1 className="mgh">Acccount Overview</h1>
        <h2 className="mg">Profile</h2>
        <h4 className="mg">
          First Name: <span className="userN">{this.props.fname}</span>
        </h4>
        <h4 className="mg">
          Last Name: <span className="userN">{this.props.lname}</span>
        </h4>
        <h4 className="mg">
          Roll No: <span className="userN">{this.props.rollno}</span>
        </h4>
        <h4 className="mg">
          Email: <span className="eml">{this.props.email}</span>
        </h4>
        <button type="submit" className="butn button1">
          Sign Out
        </button>
      </div>
      <Footer/>
    </div>
  );
  }
}

export default ProfileOverview