import { useState } from "react";

let LoginWithPremitiveState = () => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [message, setMessage] = useState('');

    let handleLogin = (event) => {
        event.preventDefault(); // Prevent form submission
        // Simple validation logic
        if (username.length === 0) {
            setMessage('Username is required.');
        } else if (password.length === 0) {
            setMessage('Password is required.');
        }
        else if (username === 'admin' && password === 'admin') {
            setMessage('Login successful!');
        } else {
            setMessage('Invalid username or password.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Username: </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
            {message && <p style={{ color: message == "Login successful!" ? "green" : "red" }}>{message}</p>}
        </div>
    );
}

export default LoginWithPremitiveState;