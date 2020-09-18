import React from 'react';
import NavBarU from './main/initials/navUnsigned'
import SNavBarU from './main/initials/navsigned'
import Home from './main/home'
import SHome from './main/home'
import Sidenav from './main/initials/sidenav';
import SSidenav from './main/initials/ssidenav';
import "./properties/homepage.css"
import { moveRight } from './properties/functions';
import BooksView from './main/bookstore/booksview'
import {Route,BrowserRouter as Router} from 'react-router-dom'
import FreeCourse from "./main/courses/freecourses"
import EventHub from "./main/eventsAndSociety/eventhuub"
import Societyhub from "./main/eventsAndSociety/societyhub"
import Signup from "./main/user/signup"
import Signin from "./main/user/signin"
import Verify from "./main/user/verify"
import 'tachyons'
import BookDownloads from './main/ebooks/bookDownload';
import NoteDownloads from './main/ebooks/noteDownload';
import QuestionDownloads from './main/ebooks/questionDownload';
import JoinBookStore from './main/bookstore/joinBookstore';
import SJoinBookStore from './main/bookstore/sjoinBookstore';
import Upload from './main/bookstore/upload';
import JoinStudentClub from './main/bookstore/joinstudentclub';
import SJoinStudentClub from './main/bookstore/sjoinstudentclub';
import ProfileOverview from './main/user/profileview';
import ClubSignup from './main/user/Clubform';
class App extends React.Component{

  constructor(props) {
        super(props)
        this.state ={
          user:{
                FirstName:'',
                LastName:'',
                Rollno:'',
                email:'',
                password:''
            },
            signedin:false
        }
    }

    loaduser = (data) => {
        this.setState({user:{
                FirstName:data.first,
                LastName:data.last,
                Rollno:data.rollno,
                email:data.email,
                password:data.password
        }})
    }
    signed = (data) => {
        this.setState({signedin:data})
    }

  render(){
      console.log(this.state)
      if (this.state.signedin) {
        return (
    <Router>
    <div className="App">
        <SSidenav/>
        <SNavBarU/> 
        <div className="stick" onClick={moveRight}> 
          <Route exact path="/" component={SHome} />
          <Route exact path="/NsutHub2.0" component={SHome} />
          <Route exact path="/login" component={SHome}/>
          <Route exact path="/books" component={BookDownloads} />
          <Route exact path="/freecourses" component={FreeCourse} />
          <Route exact path="/events" component={EventHub} />
          <Route exact path="/bookstore" component={SJoinBookStore} />
          <Route exact path="/studentclub" component={SJoinStudentClub} />
          <Route exact path="/registerclub" component={ClubSignup}/>
          <Route exact path="/society" component={Societyhub} />
          <Route exact path="/profile" component={ProfileOverview} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/notes" component={NoteDownloads}/>
          <Route exact path="/bookdetails/:bookid" component={BooksView}/>
          <Route exact path="/questions" component={QuestionDownloads}/>
          <Route path="/verify/" component={() => <Verify loaduser={this.loaduser}/>} />
        </div>
    </div>
    </Router>
  );
      }
      else{
        return (
    <Router>
    <div className="App">
        <Sidenav/>
        <NavBarU/> 
        <div className="stick" onClick={moveRight}>
          <Route exact path="/" component={Home} />
          <Route exact path="/NsutHub2.0" component={Home} />
          <Route exact path="/login" component={() => <Signin loaduser={this.loaduser} signed={this.signed}/>}/>
          <Route exact path="/register" component={() => <Signup loaduser={this.loaduser}/>}/>
          <Route exact path="/books" component={BookDownloads} />
          <Route exact path="/freecourses" component={FreeCourse} />
          <Route exact path="/events" component={EventHub} />
          <Route exact path="/society" component={Societyhub} />
          <Route exact path="/bookstore" component={JoinBookStore} />
          <Route exact path="/studentclub" component={JoinStudentClub} />
          <Route exact path="/questions" component={QuestionDownloads}/>
          <Route exact path="/notes" component={NoteDownloads} />
          <Route path="/verify/" component={() => <Verify loaduser={this.loaduser}/>} />
        </div>
    </div>
    </Router>
  );
      }
  }
}
export default App;

