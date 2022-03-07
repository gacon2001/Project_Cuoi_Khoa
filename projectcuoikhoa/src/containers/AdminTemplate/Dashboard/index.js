import React from 'react'
import { Route } from 'react-router-dom'
import NavbarDashboard from '../_components/NavbarDashboard'

export default function Dashboard({exact, path, component}) {
  return (
    <div>
      <NavbarDashboard/>
        
        <h1>Dashboard</h1>
       
        <Route exact={exact} path={path} component={component} />
    </div>
  )
}
