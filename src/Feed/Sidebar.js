import { Avatar } from '@material-ui/core'
import React from 'react'

import './Sidebar.css'

export const Sidebar = () => {
   

    const recentItem=(topic)=>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>   
     );
    return (
        <div className="sidebar">
           <div className="sidebar_top">
               <img src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
               <Avatar src="" className="sidebar_avatar"/>
               <h2>Maneeth M</h2>
               <h4>This is test mama</h4>
           </div>
           <div className="sidebar_stats">

                <div className="sidebar_stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar_statNumber">1509</p>

                </div>
                <div className="sidebar_stat">
                      <p>Views on post</p>
                    <p className="sidebar_statNumber">1009</p>

                 </div>
           </div>
           <div className="sidebar_bottom">
               <p> Recent</p>
                {recentItem('maneeth')}
                {recentItem('coding')}
                {recentItem('SDE')}
                {recentItem('ReactJs')}


           </div>
        </div>
    )
}


export default Sidebar

