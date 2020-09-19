import React from "react"
import "./profile.css"
import {Route} from "react-router-dom"
import ProfileOverview from "./profileview";

class ProfileUpdate extends React.Component { 
   
  constructor(props) {
    super(props);
    this.state ={
        SignUpEmail: '',
        SignUpPassword:'',
        SignUpconfirmPassword:'',
        SignUpfirstname:'',
        SignUplastname:'',
        SignUprollno:''
    }
}


onEmailChange = (event) =>{
this.setState({SignUpEmail: event.target.value})
}

onPasswordChange = (event) =>{
this.setState({SignUpPassword: event.target.value})
}
onconfirmPasswordChange = (event) =>{
this.setState({SignUpconfirmPassword: event.target.value})
}
onfirstnameChange = (event) =>{
this.setState({SignUpfirstname: event.target.value})
}
onlastnameChange = (event) =>{
this.setState({SignUplastname: event.target.value})
}
onrollnoChange = (event) =>{
this.setState({SignUprollno: event.target.value})
}


onSubmit = () =>{
if (this.state.SignUpPassword === this.state.SignUpconfirmPassword && this.state.SignUpPassword.length >= 8) {
fetch('https://nsut-hub-backend.herokuapp.com/updateprofile',{
  method:'post',
  headers:{'Content-Type':'application/json'},
  body: JSON.stringify({
    first:this.state.SignUpfirstname,
    last:this.state.SignUplastname,
    rollno:this.state.SignUprollno,
    email:this.state.SignUpEmail,
    password:this.state.SignUpPassword
  })
})
.then(response => response.json())
.then(user =>{ 
  this.props.loaduser(user);
  this.props.onroutechange('homein');
})
}
else if (this.state.SignUpPassword.length <= 8) {
   {{alert("Password and Confirm Password are mismaching")}}
}
else{
  {{alert("Password and Confirm Password are mismaching")}}
}
}
  
  render() {
   return (    
        <div className="App moveRt">
           <div className="sidenavPro">
        <Route path="/profile" exact component={ProfileOverview}>
          <div  className="edit">
           Account Overview
          </div>
        </Route>
        <Route path="/editprofile" exact component={ProfileUpdate}>
         <div className="edit1">
           Edit Profile
         </div>
        </Route>
      </div>
        <div class="row row-content">
          <div class="col-12">
            <h3>EDIT PROFILE</h3>
          </div>
          <div class="col-12 col-md-9">
            <form>
              <div class="form-group row">
                <label for="emailid" class="col-md-2 col-form-label">
                  Email
                </label>
                <div class="col-md-10">
                  <input
                    type="email"
                    class="form-control"
                    id="emailid"
                    name="emailid"
                    placeholder="Email"
                  />
                </div>
        
                <div class="form-group row">
                  <label for="firstname" class="col-md-2 col-form-label">
                    Gender
                  </label>
                  <div class="col-md-10">
                    <input
                      type="text"
                      class="form-control"
                      id="firstname"
                      name="firstname"
                      placeholder="Male/Female"
                    />
                  </div>
                </div>
        
                <div class="form-group row">
                  <label for="password">Password</label>
                  <div class="col-md-10">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      minlength="8"
                    />
                  </div>
                </div>
        
                <div class="form-group row">
                  <label for="password">Confirm Password</label>
                  <div class="col-md-10">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      minlength="8"
                    />
                  </div>
                </div>
        
                <div class="form-group row">
                  <div class="offset-md-2 col-md-10">
                    <button type="submit" class="btn btn-primary">
                      Save Profile
                    </button>
        
                    <button type="submit" class="btn-2 btn-primary">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-12 col-md"></div>
        </div>
    </div>
    );
   }
}  

export default ProfileUpdate