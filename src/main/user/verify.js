import React from 'react';
import { Redirect } from "react-router-dom";


class Verify extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			redirect:false
		}
	}

	componentDidMount(){
		var tokenf = window.location.href.split("http://localhost:3000/verify/")[1]
		console.log(tokenf)
		fetch('https://nsut-hub-backend.herokuapp.com/activation',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				token:tokenf
			})
		})
			.then(response => response.json())
			.then(user =>{
      			if (user ===1) {
      				this.setState({redirect: true})
      		}		
      		else{
      				alert("Invalid or Expired Verification ID")
      			}
		})
	}

	render(){
		if (this.state.redirect) {
			return(<Redirect to="/login" />);
		}
		else{
			return(
			<h1>Your account has been Verified..... <br/> Redirecting</h1>
			);
		}
	}
}

export default Verify;