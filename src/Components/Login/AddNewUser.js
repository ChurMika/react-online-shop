import React from 'react'
import { Link } from 'react-router-dom'

const AddNewUser = (props) => {

    return (
        <div className="AddNewUser">
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                </ul>
            </nav>
            <div>
                <h1>Пожалуйста, заполните эту форму, чтобы создать учетную запись</h1>
                <form>
                    <label for='name'>Электронная почта</label>
                    <input type='text' name='name'></input>

                    <label for='phone'>Электронная почта</label>
                    <input type='phone' name='phone'></input>

                    <label for='email'>Электронная почта</label>
                    <input type='email' name='email'></input>
                   
                    <label for='password'>Пароль</label>
                    <input type='password' name='password'></input>

                    <label for='seccondPassword'>Повторите пароль</label>
                    <input type='password' name='seccondPassword'></input>

                    <Link to="/profile">Зарегистрироваться</Link>
                </form>
            </div>          
        </div>
    )
}

export default AddNewUser