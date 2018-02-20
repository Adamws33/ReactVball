import React from 'react';
import Home from './Home';
import FunctionalComponentDemo from './FunctionalComponentDemo'


export const routes = [
    {
      path: '/home',
      exact: true,
      main: () => <Home />
    },
    {
      path: '/functionalcomponent',
      exact: true,
      main: ()=> <FunctionalComponentDemo />
    },
]