import React from 'react'
import { Routes, Route, Redirect } from 'react-router'
import '../App.css'
import Showcase from '../Showcase/Showcase'
import Cart from '../Cart/Cart'
import Profile from '../Profile/Profile'


export default function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Showcase />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/profile" element={<Profile />} />

            </Routes>
        </div>
    )
}