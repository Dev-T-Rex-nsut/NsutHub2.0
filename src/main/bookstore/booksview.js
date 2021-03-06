import React from "react";
import {bookPlaceholder} from "../img/bookPlaceholder.jpg"
import {info, main} from "../../properties/functions"
import "./style.css"
import {withRouter} from "react-router-dom"
import Footer from "../initials/footer";

class BooksView extends React.Component{
    state = {};
    bargain = "";
  componentDidMount(){
     const id = this.props.match.params.id; 
     const url = `https://nsut-hub-backend.herokuapp.com/bookinfo/${id}`
     this.fetchData(id);
     if (this.state.data.bargainable) {
        this.bargain = "Contact seller to bargain"
    } else {
        this.bargain = "Not Barginable"
    }
    }  
   fetchData = url =>{
       fetch(url)
         .then(response => response.json)
         .then(json => this.setState({state: json.data}))
         .catch(err => console.error(err))
   }
  render (){
    return (
        <div className ="jist moveRt">
        <div className="main">
        <div className=" lap">
            <ul className="sidepanel">
                <li className="sidelist"><img src={this.state.data.img1} className="sideimage" onclick={main('image.1')} /></li>
                <li className="sidelist"><img src={this.state.data.img2} className="sideimage" onclick={main('image.2')} /></li>
                <li className="sidelist"><img src={this.state.data.img3} className="sideimage" onclick={main('image.3')} /></li>
            </ul>
        </div>
        <div className=" lap">
            <img src={this.state.data.img1} className="mainimage image1" style={{display: "block" }}/>
            <img src={this.state.data.img2} className="mainimage image2" style={{display: "none"}} />
            <img src={this.state.data.img3} className="mainimage image3" style={{display: "none"}} />
        </div>
        <div className="mob">
            <img src={this.state.data.img1} className="mainimage image.1" style={{display: "block"}} />
            <img src={this.state.data.img2} className="mainimage image.2" style={{display: "none"}} />
            <img src={this.state.data.img3} className="mainimage image.3" style={{display: "none"}} />
        </div>
        <div className="mob">
            <ul className="sidepanel">
                <li className="sidelist"><img src={this.state.data.img1} className="sideimage" onclick={main('image.1')} /></li>
                <li className="sidelist"><img src={this.state.data.img2} className="sideimage" onclick={main('image.2')} /></li>
                <li className="sidelist"><img src={this.state.data.img3} className="sideimage" onclick={main('image.3')} /></li>
            </ul>
        </div>
        <div className="dis">
            <h1 className="description">OVERVIEW</h1>
            <p className="description1">
                {this.state.data.description}
            </p>
            <h1 className="description">{this.state.data.Author}</h1>
            <p className="description1">
              Title: {this.state.data.title}<br/>
              Price: {this.state.data.price}<br/>
              Barginable: {this.bargain}<br/>
              Edition: {this.state.data.edition}<br/>
              Owner: {this.state.data.name}<br/>
              Contact: {this.state.data.contact}
            </p>
        </div>
    </div>
    {/* <div>
        <ul className="product">
        <li className="but clk1" onclick={info('info1','clk1')} style={{boxShadow: "none"}} >Description</li>
            <li className="but clk2" onclick={info('info2','clk2')} >Specifications</li>
            <li className="but clk3" onclick={info('info3','clk3')}>Achievements</li>
        </ul>
        <p style={{display: "block"}} className="box info1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p style={{display: "none"}}className="box info2">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        <p style={{display: "none"}}className="box info3">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
    </div> */}
    <Footer/>
 </div>
    );
 };
}
export default withRouter(BooksView)