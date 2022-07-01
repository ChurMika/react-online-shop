import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'
import './Showcase.css'

const Showcase = (props) => {

    return (
        <div className="Showcase">
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/admin">Админ</Link></li>
                    <li><Link to="/login">Личный кабинет</Link></li>
                    <li><Link to="/cart">Корзина</Link></li>
                </ul>
            </nav>
            <main>
                <div className='items'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </main>
        </div>
    )
}

export default Showcase