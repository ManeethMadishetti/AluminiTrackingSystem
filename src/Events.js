import React from 'react';
import {withRouter} from 'react-router-dom';
import "./Events.css";

function Events() {
    return (
        
        <div className="Events">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossorigin="anonymous"
                />
            <div className="Events_Container">
                <h3>Events</h3>
                <hr></hr>
                <p>the follwing are currently happening events in VASAVI college</p>
                <div className="Events_subContainer">
                    <div class="row">
                            <div className="col-md-6 border-right">
                                <p>on-going events</p>
                            </div>
                            <div className="col-md-6">
                                <p>upcomming events</p>
                            </div>
                    </div>
                    </div>
       
                
            </div>
        </div>
    )
}

export default withRouter(Events);
