
import { Avatar } from '@material-ui/core'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    console.log(user.user.displayName);
    return (
       <Container id="SidebarContainer">
        <div className="sidebar">
           <div className="sidebar_top">
               <img src='https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
               alt=''/>
               <Avatar src={user.user.photoUrl} className="sidebar__avatar">
               {user.user.email[0]}
               </Avatar>
               <h2>{user.user.displayName}</h2>
               
               <h4>{user.user.email}</h4>
           </div>
           <div className="sidebar_stats">
               <div className="sidebar_stat">
                   <p>who viewed you</p>
                   <p className="sidebar_statNumber">2,543</p>
               </div>
               <div className="sidebar_stat">
                   <p>views on post</p>
                   <p className="sidebar_statNumber">2,543</p>
               </div>
               
           </div>

           <div className="sidebar_bottom">
               <p>Recent</p>
               {recentItem("reactjs")}
               {recentItem("programming")}
               {recentItem("software")}
               {recentItem("developing")}
               {recentItem("design")}
           </div>
        </div>
        </Container>
    )
}

export default Sidebar;
