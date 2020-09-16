import React from 'react';
import NavBarU from './main/initials/navUnsigned'
import Home from './main/home'
import Sidenav from './main/initials/sidenav';
import "./properties/homepage.css"
import { moveRight } from './properties/functions';
import BooksView from './main/bookstore/booksview'
import {Route,BrowserRouter as Router} from 'react-router-dom'
import FreeCourse from "./main/courses/freecourses"
import EventHub from "./main/eventsAndSociety/eventhuub"
import Societyhub from "./main/eventsAndSociety/societyhub"
import Signup from "./main/user/signup"
import Signin from "./main/user/signin"
import 'tachyons'
import Downloads from './main/ebooks/bookDownload';

function App() {
  return (
    <Router>
    <div className="App">
        <Sidenav/>
        <NavBarU/> 
        <div className="stick" onClick={moveRight}> 
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Signin} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/books" component={Signup} />
          <Route exact path="/freecourses" component={FreeCourse} />
          <Route exact path="/events" component={EventHub} />
          <Route exact path="/society" component={Societyhub} />
          <Route exact path="/downloads" component={Downloads} />
        </div>
    </div>
    </Router>
  );
}

export default App;

