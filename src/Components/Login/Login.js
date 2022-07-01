import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {

    return (
        <div className="Login">
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                </ul>
            </nav>
            <div>
                <h1>Войти</h1>
                <form>
                    <label for='email'>Введите электронную почту</label>
                    <input type='email' name='email'></input>
                    <br/>
                    <label for='password'>Введите пароль</label>
                    <input type='password' name='password'></input>
                    <Link to="/profile">Войти</Link>
                </form>
                <Link to="/newUser">Зарегистроваться</Link>
            </div>          
        </div>
    )
}

export default Login