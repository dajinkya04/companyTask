import React from 'react'
import {Routes, Route} from "react-router-dom"
import Adminmenu from './components/Adminmenu'
import Configration from './components/Configration'
import Employeedetails from './components/Employeedetails'
import Login from './components/Login'

const App = () => {
  return (
    <> 
    <Routes >
      <Route path='/' element={<Login />}/>
        <Route path="/Configration" element={<Configration />}/>
        <Route path="/Adminmenu" element={<Adminmenu />}/>
        <Route path="/Employeedetails" element={<Employeedetails />}/>
      </Routes>
    </>
  )
}

export default App