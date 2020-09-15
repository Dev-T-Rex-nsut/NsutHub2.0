import React from "react";
import "./style.css";
import {Route} from "react-router-dom"
import ProfileUpdate from "./profileUpdate";

const ProfileOverview = () => {
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
          Username: <span className="userN">Shivam Modi</span>
        </h4>
        <h4 className="mg">
          Email: <span className="eml">shivam27modi@gmail.com</span>
        </h4>
        <h4 className="mg">
          Phone No: <span className="pno">9823992010</span>
        </h4>

        <button type="submit" className="butn">
          Edit Profile
        </button>
        <button type="submit" className="butn button1">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default ProfileOverview