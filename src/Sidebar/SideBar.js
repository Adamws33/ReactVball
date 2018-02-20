import React from 'react';

import {
  Route,
} from 'react-router-dom'
import './sidebar.css'

import { routes } from '../home/_routes';

const SideBar = () => (

  
  
    <div>
      <div className="SideBar">
        <div>
          <h1>Message Board</h1>
        </div>
      </div>
      <div className="sidebar-route">
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  
)

export default SideBar;