import React from 'react';
import './form.css'
import Footer from '../initials/footer'
import { useAlert } from 'react-alert' 

class Signup extends React.Component {
  
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
    var endid = this.state.SignUpEmail.split("@")
    if (endid[1] === "nsut.ac.in" || endid[1] === "nsit.ac.in") {
        if (this.state.SignUpPassword === this.state.SignUpconfirmPassword && this.state.SignUpPassword.length >= 8) {
    fetch('http://localhost:3000/signup',{
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
      alert("Check the Email:"+user.email+" for Verfication")
    })
  }
  else if (this.state.SignUpPassword.length <= 8) {
    {{alert("Password and Confirm Password are mismaching")}}
  }
  else{
      {{alert("Password and Confirm Password are mismaching")}}
  }
    }
    else{
      alert("Please use Nsut or Nsit ID for Registration")
    }
  }



  render(){
    const {onroutechange} = this.props;
    return(
      <div className="fat fat2 moveRt">
        <main className="br4 ba dark-gray b--black-10 w-70-m w-40-l mw7 shadow-3 center pa3 black-80 main1">
          <form className="center form">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">First name</label>
                <input 
                onChange={this.onfirstnameChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="firstname" name="firstname"  id="firstname"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Last name</label>
                <input 
                onChange={this.onlastnameChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="lastname" name="lastname"  id="lastname"/>
              </div>
              <div className="mt3">
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Roll No.</label>
                <input 
                onChange={this.onrollnoChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="rollno" name="rollno"  id="rollno"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input 
                onChange={this.onEmailChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Password</label>
                <input 
                onChange={this.onPasswordChange}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Confirm Password</label>
                <input 
                onChange={this.onconfirmPasswordChange}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="confirm password"  id="confirm password"/>
              </div>
              <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
            </div>
            </fieldset>
            <div onClick={this.onSubmit}>
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib sin" method="post" value="Sign Up" />
            </div>
            <div className="lh-copy mt3">
              <a onClick={() => onroutechange('signin')} className="f6 link dim black db">Already a member Sign In</a>
            </div>
          </form>
        </main>
        <Footer/>
      </div>
  );
  }
}
export default Signup;