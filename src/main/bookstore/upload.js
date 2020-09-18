import React from 'react';
import '../user/form.css'
import { useAlert } from 'react-alert' 
import FileBase64 from 'react-filebase64';
import Footer from '../initials/footer';

class Upload extends React.Component {
  
    constructor(props) {
        super(props);
        this.state ={
            Name: '',
            Price:'',
            Barginable:'',
            Edition:'',
            Descreption:'',
            Title:'',
            Author:'',
            Email:'',
            Contact:'',
            img1: [],
            img2: [],
            img3: []
        }
    }


  onnameChange = (event) =>{
    this.setState({Name: event.target.value})
  }

  onpriceChange = (event) =>{
    this.setState({Price: event.target.value})
  }
  onbarginChange = (event) =>{
    this.setState({Barginable: event.target.value})
  }
  oneditionChange = (event) =>{
    this.setState({Edition: event.target.value})
  }
  ondescreptionChange = (event) =>{
    this.setState({Descreption: event.target.value})
  }
  ontitleChange = (event) =>{
    this.setState({Title: event.target.value})
  }
  onauthorChange = (event) =>{
    this.setState({Author: event.target.value})
  }
  onemailChange = (event) =>{
    this.setState({Email: event.target.value})
  }
  oncontactChange = (event) =>{
    this.setState({Contact: event.target.value})
  }
  getFiles1(img1){
    this.setState({ img1: img1[0].base64 })
    console.log(img1);
  }
  getFiles2(img2){
    this.setState({ img2: img2[0].base64 })
    console.log(img2);
  }
  getFiles3(img3){
    this.setState({ img3: img3[0].base64 })
    console.log(img3);
  }


  onSubmit = () =>{
    fetch('http://localhost:3000/bookupload',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        name:this.state.Name,
        price:this.state.Price,
        barginable:this.state.Barginable,
        edition:this.state.Edition,
        descreption:this.state.Descreption,
        title:this.state.Title,
        author:this.state.Author,
        email:this.state.Email,
        contact:this.state.Contact,
        img1:this.state.img1,
        img2:this.state.img2,
        img3:this.state.img3
      })
    })
    .then(response => response.json())
    .then(user =>{ 
      alert("Your Book is Successfully Added")
    })
  }



  render(){
    const {onroutechange} = this.props;
    return(
      <div className="fat moveRt">
        <main className="main1 br4 ba dark-gray b--black-10 w-70-m w-50-l mw7 shadow-3 center pa3 black-80">
          <form className="center form">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Book Upload</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Name</label>
                <input 
                onChange={this.onnameChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="firstname" name="firstname"  id="firstname"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Price</label>
                <input 
                onChange={this.onpriceChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="lastname" name="lastname"  id="lastname"/>
              </div>
              <div className="mt3">
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Barginable.</label>
                <input 
                onChange={this.onbarginChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="rollno"  id="rollno"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Edition</label>
                <input 
                onChange={this.oneditionChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Descreption</label>
                <input 
                onChange={this.ondescreptionChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Title</label>
                <input 
                onChange={this.ontitleChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Author</label>
                <input 
                onChange={this.onauthorChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Email</label>
                <input 
                onChange={this.onemailChange}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="password"  id="password"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Contact</label>
                <input 
                onChange={this.oncontactChange}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="confirm password"  id="confirm password"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">img1</label>
                <FileBase64
                multiple={ true }
                onDone={ this.getFiles3.bind(this) } />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">img2</label>
                <FileBase64
                multiple={ true }
                onDone={ this.getFiles2.bind(this) } />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">img3</label>
                <FileBase64
                multiple={ true }
                onDone={ this.getFiles3.bind(this) } />
              </div>
            </div>
            </fieldset>
            <div onClick={this.onSubmit}>
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib sin" method="post" value="Upload" />
            </div>
          </form>
        </main>
        <Footer/>
      </div>
  );
  }
}
export default Upload