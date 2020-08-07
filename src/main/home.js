import React from "react";
import { moveRight } from "../properties/functions";
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import "./style.css"
import background from './img/background.png';
import card1 from './img/card1.png';
import card2 from './img/card2.png';
import card3 from './img/card3.png';
import event from './img/event.png';
import society from './img/society.png';
import ques from './img/ques.png';
import notes from './img/notes.png';
import new1 from './img/new.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
class Home extends React.Component {

	  componentDidMount(){
    AOS.init({offset: 500,duration: 3000,delay: 500})
  }

	changeinfo = (ids,up,down) => {
		var x= document.getElementById(ids);
		var y = document.getElementsByClassName("info");
		var z= document.getElementsByClassName("up");
		var a= document.getElementsByClassName(up);
		var b= document.getElementById(down);
		var c= document.getElementsByClassName("down");
		// for (var i = 0; i < y.length; i++) {
		// 	y[i].style.display = "none";
		// 	z[i].style.display="none";
		// 	c[i].style.display="block";
		// }
		// x.style.display = "block";
		// b.style.display="none";
		// a[0].style.display = "block";
		console.log("x")
	}

	changeicon = (classes) => {
		var x = document.getElementsByClassName(classes);
		var y = document.getElementsByClassName("info");
		var z = document.getElementsByClassName("down");
		// for (var i = 0; i < y.length; i++) {
		// 	y[i].style.display = "none";
		// 	z[i].style.display="block";
		// }
		// x[0].style.display="none";
		console.log(x);
	}

	render(){
   return ( 
       <main className="moveRt" >
         <div class="container">
	<img src={new1} class="her"/>
	<h1 class="bottom-left" data-aos='fade-down' data-aos-duration="5000">
	<p class="hero-text1">Welcome</p>
	<p class="hero-text2">To</p>
	<b class="hero-text4">NSUT-HUB</b><br/>
	<p class="hero-text3">Enlightning Students,</p>
	<p class="hero-text3 notop">One at a time.</p>
	<p class="hero-text3 notop">By the students,For the Students.</p>
	</h1>
	</div>
<div class="grid">
	<div data-aos="fade-down" data-aos-duration="3000" class="cardmajor">
		<div  class="card">
		<img src={card1} />
		<div class="text">
		<h3 class="texthead">Book Store: </h3>
		<p class="textdis">Buy and Sell books by Eliminating the middle men. Buy at Low cost, Sell at more price, Simply profitable.</p></div>
		<p class="instruct">for more info click on arrow</p>
		<p class="down" id="down1" onClick={this.changeinfo('info1','up1','down1')}><FaArrowDown /></p>
		<p class="up1 up"  onClick={this.changeicon('up1')}><FaArrowUp /></p>
	</div>
	</div>
	<div data-aos="fade-down" data-aos-duration="3000">
		<div class="card" >
		<img src={card2} />
		<div class="text">
		<h3 class="texthead">Student Club: </h3>
		<p class="textdis">Make your own club and connect with like minded people with same interests.</p></div>
		<p class="instruct">for more info click on arrow</p>
		<p class="down" id="down2" onClick={this.changeinfo('info2','up2','down2')}><FaArrowDown /></p>
		<p class="up2 up" onClick={this.changeicon('up2')}><FaArrowUp /></p>
	</div>
	</div>
	<div data-aos="fade-down" data-aos-duration="3000">
		<div class="card">
		<img src={card3} />
		<div class="text">
		<h3 class="texthead">Course links: </h3>
		<p class="textdis">Buy and Sell. Eliminate the middle men. Low cost, more profit.</p></div>
		<p class="instruct">for more info click on arrow</p>
		<p class="down" id="down3" onClick={this.changeinfo('info3','up3','down3')}><FaArrowDown /></p>
		<p class="up3 up" onClick={this.changeicon('up3')}><FaArrowUp /></p>
	</div>
	</div>
</div>

<div id="info1" class="info">
	Eliminate the middle man who racks up most of the profit when a book exchanges hands. Directly connect with the buyer or seller of the book thereby reducing the cost and increasing your profits.
</div>
<div id="info2" class="info">
	checking2
</div>
<div id="info3" class="info">
	checking3
</div>
<div class="extra-main">
	<h1 class="extra-head">Other Services</h1>
	<div class="grid1">
	<p class="changelay1 lay" data-aos="fade-right" data-aos-duration="3000"><b class="extra-heading">Question Papers</b><br/>-every subject, every year.<br/>-from (insert year)<br/></p>
	<div class="extra-img" data-aos="fade-left" data-aos-duration="3000">
	<img  src={ques} width="100%;" class ="extra" />
	</div>
	<p class="changelay2 lay" data-aos="fade-right" data-aos-duration="3000"><b  class="extra-heading">Question Papers</b><br/>-every subject, every year.<br/>-from (insert year)<br/></p>
	<div class="extra-img" data-aos="fade-right" data-aos-duration="3000">
	<img  src={event} width="100%;" class ="extra" />
	</div>
	<p class="lay" data-aos="fade-left" data-aos-duration="3000" ><b class="extra-heading">Event hub:</b><br/>-date and timing of every event<br/>-Name of the society hosting it<br/></p>
	<p class="changelay1 lay" data-aos="fade-right" data-aos-duration="3000"><b class="extra-heading">Society hub:</b><br/>-information about every society<br/>-their forms and requirements to join<br/>-contact details</p>
	<div class="extra-img" data-aos="fade-left" data-aos-duration="3000">
	<img  src={society} width="100%;" class ="extra" />
	</div>
	<p class="changelay2 lay" data-aos="fade-right" data-aos-duration="3000"><b class="extra-heading">Society hub:</b><br/>-information about every society<br/>-their forms and requirements to join<br/>-contact details</p>
	<div class="extra-img" data-aos="fade-right" data-aos-duration="3000">
	<img  src={notes} width="100%;" class ="extra" />
	</div>
	<p class="lay" data-aos="fade-left" data-aos-duration="3000"><b class="extra-heading">Notes:</b><br/>-Get notes of the topics you missed or couldn't understand.<br/>-Notes of every subject available and for every year.<br/></p>
</div>
</div>
<div class="container con-add">
<img src={background} class="her"/>
<div class="request">
	<h1 class="request-head">Join NSUT-HUB Support Team</h1>
	<p class="request-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
</div>
</div>

<div class="grid2">
	<p class="footr">©copyright 2020 by Dev. T-Rex.</p>
	<p class="footr">Logo</p>
	<p class="footr"><i class="fa fa-facebook-square fa-2x ic" aria-hidden="true"></i>
<FaFacebookF size={15} class="ic"/>
<FaGithubAlt size={15} class="ic"/>
<FaLinkedinIn size={15} class="ic"/>
<FaInstagramSquare size={15} class="ic" />
</p>
</div>
       </main>
   )
}
}

export default Home