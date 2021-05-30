import React from 'react'
import {withRouter} from 'react-router-dom';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="Schedule_container">
            <div className="Schedules">
                <h3>Scheduels gooes here</h3>
            </div>
            <div className="Timetable">
                <h3>TimeTable</h3>
            </div>
            <div className="Assignments">
                <h3>Assignments</h3>
            </div>
            
        </div>
    )
}

export default withRouter(Blogs);
