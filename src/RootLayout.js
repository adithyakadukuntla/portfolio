import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar'
function RootLayout() {
  return (
       <div> 
       <NavBar/>
    <div style={{minHeight:"90vh"}} >
      <Outlet/>
    </div>
    </div>
    
  )
}

export default RootLayout