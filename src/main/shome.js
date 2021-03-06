import React from "react";
import { moveRight } from "../properties/functions";
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import "./style.css"
import background from './img/background.png';
import background1 from './img/background1.png';
import card1 from './img/card1.png';
import card2 from './img/card2.png';
import card3 from './img/card3.png';
import event from './img/event.png';
import society from './img/society.png';
import ques from './img/ques.png';
import notes from './img/notes.png';
import new1 from './img/new.jpg';
import new2 from './img/new1.jpg';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";
import Downloads from "./ebooks/bookDownload";
import Footer from "./initials/footer";

class SHome extends React.Component {

  constructor(props) {
        super(props);
        this.state ={
            Stylesblock: [{display:'none'},{display:'none'},{display:'none'},],
            Stylesicon1: [{display:'none'},{display:'none'},{display:'none'},],
            Stylesicon: [{display:'block'},{display:'block'},{display:'block'},]
        }

        this.baseState = this.state 
    }


  changeinfo (n) {
  	var updating = [{display:'none'},{display:'none'},{display:'none'}];
  	this.setState({Stylesblock: updating})
  	updating[n] = {display:'block'}

  	this.setState({Stylesblock: updating})

  	var updating1 = [{display:'block'},{display:'block'},{display:'block'}];
  	this.setState({Stylesicon: updating1})
  	updating1[n] = {display:'none'}

  	this.setState({Stylesicon: updating1})

  	var updating2 = [{display:'none'},{display:'none'},{display:'none'}];
  	this.setState({Stylesicon1: updating2})
  	updating2[n] = {display:'block'}

  	this.setState({Stylesicon1: updating2})
  }

  close () {
  	this.setState(this.baseState)
  }

	render(){
		if (window.outerWidth >= 1000) {
			return ( 
       <main className="moveRt" >
         <div class="container1">
	<img src={new1} class="her"/>
	<h1 class="bottom-left1"  >
	<p class="hero-text1">Welcome</p>
	<p class="hero-text2">To </p>
	<b class="hero-text4">NSUT-HUB</b><br/>
	<p class="hero-text3">Enlightning Students,</p>
	 <p class="hero-text3 notop ">One at a time.</p>
	<p class="hero-text5 notop notop1">By the students,For the Students.</p>
	</h1>
	</div>
<div class="grid">
	<div       class="cardmajor">
		<div  class="card1">
		<Link to="/bookstore"  >
		<img src={card1} />
		</Link>
		<div class="text">
		<Link to="/bookstore"  >
		<h3 class="texthead">Book Store: </h3>
		<p class="textdis">Buy and Sell books by Eliminating the middle men. Buy at Low cost, Sell at more price, Simply profitable.</p>
		</Link></div>
		<p class="instruct">for more info click on arrow</p>
		<p style={this.state.Stylesicon[0]} class="down" id="down1" onClick={() => this.changeinfo(0)}><FaArrowDown /></p>
		<p style={this.state.Stylesicon1[0]} class="up1 up"  onClick={() => this.close()}><FaArrowUp /></p>
	</div>
	</div>
	<div      >
		<div class="card1" >
		<Link to="/studentclub"  >
		<img src={card2} />
		</Link>
		<div class="text">
		<Link to="/studentclub"  >
		<h3 class="texthead">Student Club: </h3>
		<p class="textdis">Make your own club and connect with like minded people with same interests.</p>
		</Link></div>
		<p class="instruct">for more info click on arrow</p>
		<p style={this.state.Stylesicon[1]} class="down" id="down2" onClick={() => this.changeinfo(1)}><FaArrowDown /></p>
		<p style={this.state.Stylesicon1[1]} class="up2 up" onClick={() => this.close()}><FaArrowUp /></p>
	</div>
	</div>
	<div      >
		<div class="card1">
		<Link to="/freecourses"  >
		<img src={card3} />
		</Link>
		<div class="text">
		<Link to="/freecourses"  >
		<h3 class="texthead">Course links: </h3>
		<p class="textdis">Buy and Sell. Eliminate the middle men. Low cost, more profit.</p>
		</Link></div>
		<p class="instruct">for more info click on arrow</p>
		<p style={this.state.Stylesicon[2]} class="down" id="down3" onClick={() => this.changeinfo(2)}><FaArrowDown /></p>
		<p style={this.state.Stylesicon1[2]} class="up3 up" onClick={() => this.close()}><FaArrowUp /></p>
	</div>
	</div>
</div>

<div style={this.state.Stylesblock[0]} id="info1" class="info">
	Eliminate the middle man who racks up most of the profit when a book exchanges hands. Directly connect with the buyer or seller of the book thereby reducing the cost and increasing your profits.
</div>
<div style={this.state.Stylesblock[1]} id="info2" class="info">
	checking2
</div>
<div style={this.state.Stylesblock[2]} id="info3" class="info">
	checking3
</div>
<div class="extra-main">
	<h1 class="extra-head">Other Services</h1>
	<div class="grid1">
	<p class="lay "      ><b class="extra-heading ">Question Papers</b><br/>A catalogue of up to date question papers at your disposal.<br/><br/>•every subject, every year.<br/>•from (insert year)<br/></p>
	<div class="extra-img"     >
	<Link to="/questions"><img  src={ques} width="100%;" class ="extra" /></Link>
	</div>
	<p class="changelay2 lay"      ><b class="extra-heading ">Event hub:</b><br/>Never miss an event ever again. One quick look at The Event Hub and you are good to go.<br/><br/>•date and timing of every event<br/>•Name of the society hosting it<br/>•Participation forms/requirements (if any)<br/></p>
	<div class="extra-img"      >
	<Link to="/events"><img  src={event} width="100%;" class ="extra" /></Link>
	</div>
	<p class="changelay1 lay"      ><b class="extra-heading ">Event hub:</b><br/>Never miss an event ever again. One quick look at The Event Hub and you are good to go.<br/><br/>•date and timing of every event<br/>•Name of the society hosting it<br/>•Participation forms/requirements (if any)<br/></p>
	<p class="lay"      ><b class="extra-heading ">Society hub:</b><br/>Looking for a particular society or just want to explore your options? Our Society Hub has got you covered.<br/><br/>•information about every society<br/>•their forms and requirements to join<br/>•contact details</p>
	<div class="extra-img"     >
	<Link to="/society"><img  src={society} width="100%;" class ="extra" /></Link>
	</div>
	<p class="changelay2 lay"     ><b class="extra-heading ">Notes:</b><br/>Simple and easy to understand notes for the perfect preparation. Never go unprepared ever again.<br/><br/>•Get notes of the topics you missed or couldn't understand.<br/>•Notes of every subject available and for every year.<br/></p>
	<div class="extra-img"      >
	     <Link to="/notes"><img  src={notes} width="100%;" class ="extra" /></Link>
    </div>
	<p class="changelay1 lay"     ><b class="extra-heading ">Notes:</b><br/>Simple and easy to understand notes for the perfect preparation. Never go unprepared ever again.<br/><br/>•Get notes of the topics you missed or couldn't understand.<br/>•Notes of every subject available and for every year.<br/></p>
</div>
</div>
<div class="container1 con-add">
<img src={background} class="her"/>
<div class="request">
	<h1 class="request-head">Join NSUT-HUB Support Team</h1>
	<p class="request-text">All of us know that getting hands on question papers, Notes ,E-Books is a difficult job and on top of it we are short-handed. We will appreciate any help we can get. You can contribute by sending us your notes, E-books, question papers. Small contributions from everyone will help us create the best collection of all the essentials. You can send the content on the Whatsapp group, join now by clicking the button given below.</p>
</div>
</div>
<Footer/>
       </main>
   )
}
	else {
			return ( 
       <main className="moveRt" >
         <div class="container1">
	<img src={new2} class="her"/>
	<h1 class="bottom-left1"    >
	<p class="hero-text1  hero-text">Welcome</p>
	<p class="hero-text2 hero-text">To </p><br/>
	<b class="hero-text4">NSUT-HUB</b><br/>
	<p class="hero-text3">Enlightning Students,</p>
	 <p class="hero-text3 notop ">One at a time.</p>
	<p class="hero-text5 notop notop1">By the students,For the Students.</p>
	</h1>
	</div>
<div class="grid">
	<Link to="/bookstore"  >
	<div       class="cardmajor">
		<div  class="card1">
		<img src={card1} />
		<div class="text">
		<h3 class="texthead">Book Store: </h3>
		<p class="textdis">Buy and Sell books by Eliminating the middle men. Buy at Low cost, Sell at more price, Simply profitable.</p></div>
	</div>	
	</div>
	</Link>
	<div      >
		<Link to="/studentclub"  >
		<div class="card1" >
		<img src={card2} />
		<div class="text">
		<h3 class="texthead">Student Club: </h3>
		<p class="textdis">Make your own club and connect with like minded people with same interests.</p></div>
	</div>
	</Link>
	</div>
	<div      >
		<Link to="/freecourses"  >
		<div class="card1">
		<img src={card3} />
		<div class="text">
		<h3 class="texthead">Course links: </h3>
		<p class="textdis">Buy and Sell. Eliminate the middle men. Low cost, more profit.</p></div>
	</div>
	</Link>
	</div>
</div>

<div style={this.state.Stylesblock[0]} id="info1" class="info">
	Eliminate the middle man who racks up most of the profit when a book exchanges hands. Directly connect with the buyer or seller of the book thereby reducing the cost and increasing your profits.
</div>
<div style={this.state.Stylesblock[1]} id="info2" class="info">
	checking2
</div>
<div style={this.state.Stylesblock[2]} id="info3" class="info">
	checking3
</div>
<div class="extra-main">
	<h1 class="extra-head">Other Services</h1>
	<div class="grid1">
	<p class="lay "      ><b class="extra-heading ">Question Papers</b><br/>A catalogue of up to date question papers at your disposal.<br/><br/>•every subject, every year.<br/>•from (insert year)<br/></p>
	<div class="extra-img"     >
	<Link to="/questions"><img  src={ques} width="100%;" class ="extra" /></Link>
	</div>
	<p class="changelay2 lay"      ><b class="extra-heading ">Event hub:</b><br/>Never miss an event ever again. One quick look at The Event Hub and you are good to go.<br/><br/>•date and timing of every event<br/>•Name of the society hosting it<br/>•Participation forms/requirements (if any)<br/></p>
	<div class="extra-img"      >
	<Link to="/events"><img  src={event} width="100%;" class ="extra" /></Link>
	</div>
	<p class="changelay1 lay"      ><b class="extra-heading ">Event hub:</b><br/>Never miss an event ever again. One quick look at The Event Hub and you are good to go.<br/><br/>•date and timing of every event<br/>•Name of the society hosting it<br/>•Participation forms/requirements (if any)<br/></p>
	<p class="lay"      ><b class="extra-heading ">Society hub:</b><br/>Looking for a particular society or just want to explore your options? Our Society Hub has got you covered.<br/><br/>•information about every society<br/>•their forms and requirements to join<br/>•contact details</p>
	<div class="extra-img"     >
	<Link to="/society"><img  src={society} width="100%;" class ="extra" /></Link>
	</div>
	<p class="changelay2 lay"     ><b class="extra-heading ">Notes:</b><br/>Simple and easy to understand notes for the perfect preparation. Never go unprepared ever again.<br/><br/>•Get notes of the topics you missed or couldn't understand.<br/>•Notes of every subject available and for every year.<br/></p>
	
		<div class="extra-img"      >
		<Link to="/notes" ><img  src={notes} width="100%;" class ="extra" /></Link>
		</div>
	<p class="changelay1 lay"     ><b class="extra-heading ">Notes:</b><br/>Simple and easy to understand notes for the perfect preparation. Never go unprepared ever again.<br/><br/>•Get notes of the topics you missed or couldn't understand.<br/>•Notes of every subject available and for every year.<br/></p>
</div>
</div>
<div class="container1 con-add">
<img src={background1} class="her"/>
<div class="request">
	<h1 class="request-head">Join NSUT-HUB Support Team</h1>
	<p class="request-text">All of us know that getting hands on question papers, Notes ,E-Books is a difficult job and on top of it we are short-handed. We will appreciate any help we can get. You can contribute by sending us your notes, E-books, question papers. Small contributions from everyone will help us create the best collection of all the essentials. You can send the content on the Whatsapp group, join now by clicking the button given below.</p>
</div>
</div>
<Footer/>
       </main>
   )
			
		}
		}
}

export default SHome