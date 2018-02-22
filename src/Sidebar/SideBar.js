import React from 'react';
import { Route } from 'react-router-dom'
import './sidebar.css'
import { routes } from '../Navbar/_routes';



const SideBar = () => (

  
  
    <div className="sidebar">
      <div className="messageBoard">
        <div>
          <h2 className="text-center">Message Board</h2>
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