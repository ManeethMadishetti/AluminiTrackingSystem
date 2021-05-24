import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import './App.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Home from './Home';
import Blogs from './Blogs';



function App() {
  return (
    <Router>
    <div className="app">
      <div className="header">
            <div className="header_left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZv0QwStxsPH0IivCqt-vESnaXhwE-7AidGmQFegxYkJyOUYVoBRRsaSM6o5_-EXaz2v8&usqp=CAU" alt=""/>
            </div>
          <div className="header_right">
                <Link to="/"> <HeaderOption Icon={HomeIcon} title="Home"/></Link>

               <Link to="/feed"> <HeaderOption Icon={DynamicFeedIcon} title="Feed"/></Link>
               <Link to="/blogs"> <HeaderOption Icon={WebIcon} title="Blogs"/> </Link>
               <Link> <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/> </Link>
               <Link><HeaderOption Icon={ChatIcon} title="Query Alumina"/> </Link>
               <Link><HeaderOption Icon={NotificationsIcon} title="Notifications"/> </Link>
               <Link> <HeaderOption avatar={true} title="Me" /> </Link>
            </div>
       </div>

      
          <switch>
          <Route exact path="/">
            <div ><h1> Helllo HI In Home </h1></div>
          </Route>
          <Route path="/feed">
            <Home />
          </Route>

          <Route path="/blogs/">
            <Blogs />
          </Route>
          </switch>

      

    </div>
    </Router>
  );
}

export default App;
