import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import './App.css';
import HeaderOption from './Feed/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Home from "./Feed/Home" ;
import Blogs from './Feed/Blogs';
import Memory from './Memories/Memory';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="app">
      <div className="header">
            <div className="header_left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZv0QwStxsPH0IivCqt-vESnaXhwE-7AidGmQFegxYkJyOUYVoBRRsaSM6o5_-EXaz2v8&usqp=CAU" alt=""/>
            </div>
          <div className="header_right">
                <Link to="/feed"> <HeaderOption Icon={HomeIcon} title="Home"/></Link>

               <Link to="/events"> <HeaderOption Icon={DynamicFeedIcon} title="Events"/></Link>
               <Link to="/memory"> <HeaderOption Icon={WebIcon} title="Memories"/> </Link>
               <Link> <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/> </Link>
               <Link><HeaderOption Icon={ChatIcon} title="Query Alumina"/> </Link>
               <Link><HeaderOption Icon={NotificationsIcon} title="Notifications"/> </Link>
               <Link> <HeaderOption avatar={true} title="Me" /> </Link>
            </div>
       </div>

      
          <switch>
          
          <Route exact path="/feed">
            <Home />
          </Route>

          <Route path="/memory">
            <Memory />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          </switch>

      

    </div>
    </Router>
  );
}

export default App;
