import { useState } from "react";

let LoginWithPremitiveState = () => {
    let [login, setLogin] = useState({
        email: '',
        password: ''
    });
    let [message, setMessage] = useState('');

    let handleLogin = (e) => {
        e.preventDefault(); // Prevent form submission
        // Simple validation logic
        if (login.email.length === 0) {
            setMessage('email is required.');
        } else if (login.password.length === 0) {
            setMessage('Password is required.');
        } else if (login.email === 'admin@123.com' && login.password === 'admin') {
            setMessage('Login successful!');
        } else {
            setMessage('Invalid username or password.');
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Email: </label>
                <input type="email" value={login.email} onChange={(e) => setLogin({...login, email: e.target.value})} />
                <br />
                <label>Password: </label>
                <input type="password" value={login.password} onChange={(e) => setLogin({...login, password: e.target.value})} />
                <br />
                <button type="submit">Login</button>
            </form>
            {message && <p style={{color: message === "Login successful!" ? "green" : "red"}}>{message}</p>}
        </div>
    );
}

export default LoginWithPremitiveState;
// This code defines a React component for a login form that uses an object to manage the state of the username and password fields. It includes validation logic to check if the fields are filled out and