import React, { useContext } from 'react'
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import NoteContext from "../context/NoteContext";


export default function LoginPage() {

    const context = useContext(NoteContext);
    const { setUserInfo } = context;

  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({name,email, password}),
          headers: {'Content-Type':'application/json'}        });

        if(response.ok){
          response.json().then(userInfo => {
            setUserInfo(userInfo)
            setRedirect(true);
          })
        }else{
          alert('wrong credential')
        }
      }

      if (redirect) {
        navigate('/');
      }

  return (
        <form className="login" onSubmit={login}>
          <h1>Login</h1>
          <input type="text"
                 placeholder="username"
                 value={name}
                 onChange={ev => setUsername(ev.target.value)}/>
            <input type="text"
                 placeholder="email"
                 value={email}
                 onChange={ev => setEmail(ev.target.value)}/>
          <input type="password"
                 placeholder="password"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)}/>
          <button>Login</button>
        </form>
      );
}