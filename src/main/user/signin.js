import React from 'react';
import './form.css'
import Footer from '../initials/footer'
import { store } from 'react-notifications-component';
class Signin extends React.Component {
  
    constructor(props) {
        super(props);
        this.state ={
            SignInEmail: '',
            SignInPassword:''
        }
    }
  onEmailChange = (event) =>{
    this.setState({SignInEmail: event.target.value})
  }

  onPasswordChange = (event) =>{
    this.setState({SignInPassword: event.target.value})
  }


  onSubmit = () =>{
    var a =0;
    fetch('http://localhost:3000/signin',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        email:this.state.SignInEmail,
        password:this.state.SignInPassword
      })
    })
    .then(response => response.json())
    .then(user =>{
      if (user.email) {
      this.props.loaduser(user);
      this.props.onroutechange('homein')
      }
      else{
        {{alert("Email or password is in Invalid")}}
      }
    })
  }

  render(){
    const {onroutechange} = this.props;
      return(
      <div className="fat moveRt">
      <main className="main1 br4 ba dark-gray b--black-10 w-70-m w-30-l mw7 shadow-3 center pa3 black-80">
          <form className="measure center form">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input 
                onChange={this.onEmailChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6"  for="password">Password</label>
                <input 
                 onChange={this.onPasswordChange}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
              </div>
              <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
            </fieldset>
            <div onClick={this.onSubmit}>
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib sin" value="Sign in"/>
            </div>
            <div className="lh-copy mt3">
              <a onClick={() => onroutechange('signup')} className="f6 link dim black db">Sign up</a>
              <a href="#0" className="f6 link dim black db">Forgot your password?</a>
            </div>
          </form>
        </main>
        <Footer/>
      </div>
  );
  }
}

export default Signin;

