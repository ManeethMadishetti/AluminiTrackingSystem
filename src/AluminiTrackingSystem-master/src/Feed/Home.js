import React from 'react'

import Feed from './Feed';

import Sidebar from './Sidebar';

import {withRouter} from 'react-router-dom';
const Home = () => {
    return (
        <div>
          
          <div className="app_body">
             {/* Widgets */}
             <Sidebar /> 
             <Feed />
             {/* Widgets */}
             
          </div>
         
        </div>
    );
}

export default withRouter(Home);
