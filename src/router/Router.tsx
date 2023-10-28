import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import UsersList from './../pages/users-list/Index'
import UserProfile from './../pages/user/Index'
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/users-list" element={<UsersList/>}/> 
            <Route path="/user" element={<UserProfile/>}/> 
        </Routes>
    </BrowserRouter>  
  )
}

export default Router