import React, {useState} from 'react'
import Registration from './Registration';
import {Link} from 'react-router-dom';
import email from "./images/email.png";
import lock from "./images/lock.png";
import profile from "./images/icon.jpg";


function Login() {

    return (
        <form>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div className='imgs'>
                            <div className='container-image'>
                                <img src={profile} alt='profile' className='profile'/>
                            </div>
                        </div>
                        <div>
                            <h1 className='LHeader'>Login</h1>
                            <div>
                                <img src={email} alt="email" className='email' />
                                <input type="email" placeholder='Insira o Email' className='fill'/>
                            </div>
                            <div className='second-input'>
                                <img src={lock} alt='password' className='email' />
                                <input type="password" placeholder='Insira a Senha' className='fill'/>
                            </div>
                            {/* Com o Link do React-Router nos podemos navegar pelas páginas*/}
                            <div className='login-btn'>
                                <Link to='/home'>
                                    <button type="button">Login</button>
                                </Link>
                            </div>
                            <div className='reg-link'>
                                <Link className='link' to='/registration'>
                                    <li>Cadastre aqui</li>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login