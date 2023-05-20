import React, {useState, useEffect} from 'react'
import Login from './Login';
import {Link} from 'react-router-dom';
import mail from "./images/email.png";
import lock from "./images/lock.png";
import profile from "./images/icon.jpg";
import { useNavigate } from "react-router-dom";


function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    async function Save(e) {
        e.preventDefault();
        let item = {name, email, password, acesso: 0}
        //console.warn(item)
        let result = await fetch("http://localhost:8000/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        console.log("result",result);
    }

    return (
        <form>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div>
                            <h1>Cadastro</h1>
                            <div>
                                <img src={profile} alt="nome" className='name' />
                                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Insira o Nome' className='fill'/>
                            </div>
                            <div className='mail-id'>
                                <img src={mail} alt="email" className='email' />
                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Insira E-mail' className='fill'/>
                            </div>
                            <div className='mail-id'>
                                <img src={lock} alt="password" className='password' />
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Insira nova senha' className='fill'/>
                            </div>
                            <div className='login-btn'>
                                <button onClick={Save}>Cadastrar</button>
                            </div>
                            <div className='reg-link'>
                                <p>Se a conta existe então</p><Link className='link' to='/login'><li>Faça Login</li></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Registration