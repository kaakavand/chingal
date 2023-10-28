import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import UsersList from './../pages/users-list/Index'
import UserProfile from './../pages/user/Index'
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/users" element={<UsersList/>}/> 
            <Route path="/users/:id" element={<UserProfile/>}/> 
        </Routes>
    </BrowserRouter>  
  )
}

export default Router