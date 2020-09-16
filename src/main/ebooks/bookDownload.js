import React from "react"
import "./download.css";
import "./nsut";
import Footer from "../initials/footer";
import { FaDownload } from "react-icons/fa";

class Downloads extends React.Component{

    // getBooks  = () => {
    //     this.bookList.map((data) => {
    //         return (
    //           <tr>
    //               <td>___</td>
    //               <td>___</td>
    //               <td>___</td>
    //               <td>___</td>
    //               <td><button class="btn"><FaDownload style={{color: "white"}}/> </button></td>
    //           </tr>
    //         )
    //     })
    //   }
      
render(){
    return (
      <>
        <div className="dnds moveRt">
         <div class="sidenav">
            <button class="dropdown-btn">COURSES
                <i class="fa fa-caret-down"></i><span class="caret"></span>
            </button>
            <div class="dropdown-container">
                <a href="#">BTECH</a>
                <a href="#">MTECH2</a>
                <a href="#">PHD</a>
                <a href="#">BBA</a>
                <a href="#">MBA</a>
            </div>

            <button  class="dropdown-btn">BRANCH
                <i class="fa fa-caret-down"></i><span class="caret"></span>
            </button>
            <div id="dropdown" class="dropdown-container">
                <a href="#">COE</a>
                <a href="#">CSAI</a>
                <a href="#">IT</a>
                <a href="">MAC</a>
                <a href="">ECE</a>
                <a href="">EE</a>
                <a href="">ICE</a>
                <a href="#">ME</a>
                <a href="#">MPAE</a>
                <a href="#">BT</a>
            </div>
            <button class="dropdown-btn">YEAR
                <i class="fa fa-caret-down"></i><span class="caret"></span>
            </button>
            <div id="dropdown" class="dropdown-container">
            <a href="#">FIRST</a>  
            <a href="">SECOND</a>
            <a href="">THIRD</a>
            <a href="">FOURTH</a>
            </div>

            <button class="dropdown-btn">SEMESTER
                <i class="fa fa-caret-down"></i><span class="caret"></span>
            </button>
            <div id="dropdown" class="dropdown-container">
            <a href="#">I</a>
            <a href="">II</a>
            <a href="">III</a>
            <a href="">IV</a>
            <a href="">V</a>
            <a href="">VI</a>
            <a href="">VII</a>
            <a href="">VIII</a>
            </div>
            
            </div>
            <nav class="navbar navbar-dark navbar-expand-sm fixed-top">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#Navbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand mr-auto" href="#"
          ><img src="img/logo2.png" height="30" width="41"
        /></a>

        <div class="collapse navbar-collapse" id="Navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a class="nav-link" href="./index.html"
                ><span class="fa fa-home fa-lg"></span> Home</a
              >
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><span class="fa fa-list fa-lg"></span> 
                Account</a
              >
            </li>
           
          </ul>
         
      

      </div>
      </div>
      </nav>
      
        <div class="row row-content">
            <div class="col-12 col-sm-9">
                <h2 style={{color:"whitesmoke"}}>Books And Notes</h2>
            </div>

            <div class="col-md-12 col-sm-6"></div>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                           
                            <th>
                               
                                S.No</th>
                            <th>NAME</th>
                            <th>UPLOAD DATE</th>
                            <th>SUBJECT</th>
                            <th>DOWNLOAD</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>___</td>
                        <td>___</td>
                        <td>___</td>
                        <td>___</td>
                        <td><button class="btn"><FaDownload style={{color: "white"}}/> </button></td>
                       </tr>
                       <tr>
                          <td>___</td>
                          <td>___</td>
                          <td>___</td>
                          <td>___</td>
                          <td><button class="btn"><FaDownload style={{color: "white"}}/> </button></td>
                       </tr>
                       <tr>
                          <td>___</td>
                          <td>___</td>
                          <td>___</td>
                          <td>___</td>
                          <td><button class="btn"><FaDownload style={{color: "white"}}/> </button></td>
                      </tr> 
                      <tr>
                        <td>___</td>
                        <td>___</td>
                        <td>___</td>
                        <td>___</td>
                        <td><button class="btn"><FaDownload style={{color: "white"}}/> </button></td>
                    </tr>
                    <tr>
                        <td>___</td>
                        <td>___</td>
                        <td>___</td>
                        <td>___</td>
                        <td><button class="btn"><FaDownload style={{color: "white"}}/> </button></td>
                    </tr>
                    <tr>
                        <td>___</td>
                        <td>___</td>
                        <td>___</td>
                        <td>___</td>
                        <td><button class="btn"><FaDownload style={{color: "white"}}/> </button></td>
                    </tr>
                    <tr>
                        <td>___</td>
                        <td>___</td>
                        <td>___</td>
                        <td>___</td>
                        <td><button class="btn"><FaDownload style={{color: "white"}}/> </button></td>
                    </tr>
                    <tr>
                        <td>___</td>
                        <td>___</td>
                        <td>___</td>
                        <td>___</td>
                        <td><button class="btn"><FaDownload style={{color: "white"}}/> </button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        </div>
      </>
    );
  }
}

export default Downloads