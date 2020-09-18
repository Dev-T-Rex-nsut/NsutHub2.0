import React from 'react';
import './form.css'
import Footer from '../initials/footer'
import { useAlert } from 'react-alert' 

class ClubSignup extends React.Component {
  
    constructor(props) {
        super(props);
        this.state ={
            Descreption: '',
            Email:'',
            Name:'',
            Moto:''
        }
    }

  ondescreptionChange = (event) =>{
    this.setState({Descreption: event.target.value})
  }
  onemailChange = (event) =>{
    this.setState({Email: event.target.value})
  }
  onnamechange = (event) =>{
    this.setState({Name: event.target.value})
  }
  onmotoChange = (event) =>{
    this.setState({Moto: event.target.value})
  }


  onSubmit = () =>{
    var endid = this.state.Descreption.split("@")
    if (endid[1] === "nsut.ac.in" || endid[1] === "nsit.ac.in") {
        if (this.state.SignUpPassword === this.state.SignUpconfirmPassword && this.state.SignUpPassword.length >= 8) {
    fetch('http://localhost:3000/club',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        email:this.state.Email,
        name:this.state.Name,
        moto:this.state.Moto,
        descreption:this.state.Descreption
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
              <legend className="f4 fw6 ph0 mh0">Student Club Form</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email ID:</label>
                <input 
                onChange={this.onemailChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="firstname" name="firstname"  id="firstname"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Name of the Club</label>
                <input 
                onChange={this.onnamechange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="lastname" name="lastname"  id="lastname"/>
              </div>
              <div className="mt3">
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Moto</label>
                <input 
                onChange={this.onmotoChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="rollno" name="rollno"  id="rollno"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Descreption</label>
                <input 
                onChange={this.ondescreptionChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
                <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
            </div>
            </fieldset>
            <div onClick={this.onSubmit}>
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib sin" method="post" value="Sign Up" />
            </div>
            <div className="lh-copy mt3">
              <a className="f6 link dim black db">By Filling this form you are accepting that your club will follow all the decipline guidelines provided by NSUT (NSUT-HUB don't have extra restriction) Which can be found on NSUT main Website</a>
            </div>
          </form>
        </main>
        <Footer/>
      </div>
  );
  }
}
export default ClubSignup;