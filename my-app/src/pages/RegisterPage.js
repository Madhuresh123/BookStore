import {useState} from "react";

export default function RegisterPage() {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({name, email, password}),

      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) { 
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
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
      <button>Register</button>
    </form>
  );
}