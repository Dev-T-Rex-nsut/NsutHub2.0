import React from "react"


class Confirm extends React.Component{
  isConfirmed = false;
  onpressed(){
    const jwt = this.props.match.params.jwt

    fetch(`https://nsut-hub-backend.herokuapp.com/activation/:${jwt}` , {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(jwt)
    })
    .then((result) => result.json())
    .then((info) => { console.log(info); this.setState(this.isConfirmed = true) })
    .catch(err => console.error(err.message))
  }
  render(){
      return(
          <>
            <div className={`conf ${this.isConfirmed ? 'hide' : 'show'}`}>
                <p style={{fontWeight: "bold", margin: "10%"}}>Confirm your email for Registration</p>
                <button style={{color: "blue", backgroundColor: "grey"}} onClick={}>Confirm Email</button>
            </div>
            <div className={`conf ${this.isConfirmed ? 'show' : 'hide'}`}>
                <p style={{fontWeight: "bold", margin: "15%"}}>Email Confirmed</p>
            </div>
          </>
      );
  }

}