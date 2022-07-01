import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../Profile/Profile'
import Cart from '../Cart/Cart'
import './Showcase.css'

const Showcase = (props) => {

    return (
        <div className="Cart">
            <nav>
                <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>
            <main>
                <div className='filter'></div>
                <div className='items'></div>
            </main>
        </div>
    )
}

export default Showcase