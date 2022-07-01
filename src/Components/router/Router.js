import React from 'react'
import { Routes, Route, Redirect } from 'react-router'
import '../App.css'
import Showcase from '../Showcase/Showcase'
import Cart from '../Cart/Cart'
import Profile from '../Profile/Profile'
import Admin from '../Admin/Admin'
import Login from '../Login/Login'
import AddNewUser from '../Login/AddNewUser'


export default function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Showcase />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/admin" element={<Admin />} />

                <Route path="/login" element={<Login />} />

                <Route path="/newUser" element={<AddNewUser />} />

            </Routes>
        </div>
    )
}