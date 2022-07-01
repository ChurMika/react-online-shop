import React from 'react'
import './Item.css'

const Item = (props) => {

    return (
        <div className="Item">
            <h1>Товар</h1>
            <div className='Item-descr'>
                <img src='#' alt='товар'></img>
                <p>Описание товара</p>
                <p>Количество товара</p>
                <button>Добавить в корзину</button>
                <button className='Item-btn'>Заказать</button>
            </div>       
        </div>
    )
}

export default Item