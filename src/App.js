import React, { useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './App.css';
import HeaderOption from './Feed/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Home from "./Feed/Home" ;
import Blogs from './Blogs/Blogs';
import Events from './Events/Events'
import Memory from './Memories/Memory';
import Login from './Login/Login';
import Profile from './DropDown/Profile';
import About from './DropDown/About';
import Query from  './QueryAlumni/QueryAlumni';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from "@material-ui/core";
import Job from './Jobs/Job';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventIcon from '@material-ui/icons/Event';
import { login, logout, selectUser } from './features/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import { auth } from './firebase/config';
import Feed from './Feed/Feed';
import { Navbar,Dropdown,DropdownButton, Nav } from 'react-bootstrap';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  const logoutOfApp=()=>{
    alert("loging out");
    console.log("Logging Out.....")
    dispatch(logout());
    alert(auth.currentUser);
    auth.signOut();   
};

  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
       dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl:userAuth.photoURL,
        }));
      }
      else{
        dispatch(logout());
      }
    });
    
  }, []);
    
  return (
    
    <div className="app">
      {!user.user ?(
               <Login/>
      ):(
        
        <Router>
        <Navbar sticky="top" className="navbarheader"expand="lg">
        <div className="header">
          <div className="header_left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZv0QwStxsPH0IivCqt-vESnaXhwE-7AidGmQFegxYkJyOUYVoBRRsaSM6o5_-EXaz2v8&usqp=CAU" alt=""/>
          </div>
          <div className="header_right">
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                    <Nav.Link><Link to=""> <HeaderOption Icon={HomeIcon} title="Home"/></Link></Nav.Link>
                    <Nav.Link><Link to="/blogs"> <HeaderOption Icon={ScheduleIcon} title="Schedules"/> </Link></Nav.Link>
                    <Nav.Link><Link to="/Events"><HeaderOption Icon={EventIcon} title="Events"></HeaderOption></Link></Nav.Link>
                    <Nav.Link><Link to="/memory"> <HeaderOption Icon={WebIcon} title="Memories"/> </Link></Nav.Link>
                    <Nav.Link><Link to="/jobs"> <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/> </Link></Nav.Link>
                   
                    <Nav.Link><Link to="/QueryAlumni"><HeaderOption Icon={ChatIcon} title="Query Alumina"/> </Link></Nav.Link>
                    <Nav.Link><Link><HeaderOption Icon={NotificationsIcon} title="Notifications"/> </Link></Nav.Link>
                    <DropdownButton id="dropdown-secondary-button" title="">
                      <Dropdown.Item><Link to='/Profile'>Profile</Link> </Dropdown.Item>
                          <Dropdown.Item><Link to="/About">About</Link></Dropdown.Item>
                          <Dropdown.Item href="#/action-3" onClick={logoutOfApp}>Logout</Dropdown.Item>
                    </DropdownButton>
            </Nav>
            </Navbar.Collapse>
            
         </div>
      </div></Navbar>
      <switch>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/memory">
            <Memory />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/jobs">
            <Job/>
          </Route>
          <Route path="/Events">
              <Events/>
          </Route>
          <Route path="/Profile">
            <Profile/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/QueryAlumni">
            <Query/>
          </Route>
          </switch>
          
          </Router>



      ) }
        

          

  </div>
      
      
      
      

    
  );
}

export default App;
