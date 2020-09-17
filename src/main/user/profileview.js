import React from "react";
import "./style.css";
import {Route} from "react-router-dom"
import ProfileUpdate from "./profileUpdate";

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
        <Route path="/editprofile" exact component={ProfileUpdate} >
         <div className="edit1">
           Edit Profile
         </div>
        </Route>
      </div>
      <div className="bossForm">
        <h1 className="mgh">Acccount Overview</h1>
        <h2 className="mg">Profile</h2>
        <h4 className="mg">
          Username: <span className="userN">{this.props.rollno}</span>
        </h4>
        <h4 className="mg">
          Email: <span className="eml">{this.props.email}</span>
        </h4>
        <button type="submit" className="butn button1">
          Sign Out
        </button>
      </div>
    </div>
  );
  }
}

export default ProfileOverview