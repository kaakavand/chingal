import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import UsersList from './../pages/users-list/Index'
import UserProfile from './../pages/user/Index'
import HomePage from './../pages/Index'
import RouteConfig from './../config/router.json'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={RouteConfig.users} element={<UsersList/>}/> 
            <Route path={RouteConfig.userReadOne} element={<UserProfile/>}/> 
            <Route path="/" element={<HomePage/>}/> 
        </Routes>
    </BrowserRouter>
    
  )
}

export default Router