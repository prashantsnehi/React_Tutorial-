import { useState } from "react";
import avtar from './cheerful-school-boy.png'; // Assuming you have an image in the same directory


let LoginWithPremitiveState = () => {
    let [login, setLogin] = useState({
        email: '',
        password: ''
    });

    let [errorEmail, setErrorEmail] = useState('');
    let [errorPassword, setErrorPassword] = useState('');
    let [message, setMessage] = useState('');

    let handleLogin = (e) => {
        e.preventDefault(); // Prevent form submission
        // Simple validation logic
        if (login.email.length === 0) {
            setErrorEmail('email is required.');
        } else if (login.password.length === 0) {
            setErrorPassword('Password is required.');
        } else if (login.email === 'admin@123.com' && login.password === 'admin') {
            setErrorEmail('');
            setErrorPassword('');
            setMessage('Login successful!');
        } else {
            setMessage('Invalid username or password.');
        }
    }
    let [imgUrl, setImgUrl] = useState(avtar); // Use the imported image
    let [imgUrl2, setImgUrl2] = useState('https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg');
    return (
        <div className="row mb-4 flex justify-content-end">
            <div className="col-md-4 m-4">
                <div className="card" style={{opacity: '0.8'}}>
                    <div className="card-header text-center">
                        <h1 className="text-center my-4">Login Form</h1>
                    </div>
                    {/* <img src={imgUrl2}
                        className="card-img-top" 
                        style={{ width: '300px', height: 'auto', alignContent: 'center', margin: '0 auto' }}
                        alt="..."></img> */}
                    <div className="card-body">
                        <div className="row mb-3 p-4">
                            <div className="col-md-12 text-center" style={{ border: '5px solid #ccc', padding: '20px', borderRadius: '50%' }}>
                                <img src={imgUrl2}
                                    // className="card-img-top" 
                                    style={{ width: '250px', height: 'auto', alignContent: 'center', margin: '0 auto' }}
                                    alt="..."></img>
                            </div>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-floating mb-3">
                                <input type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="name@example.com"
                                    value={login.email}
                                    onChange={(e) => setLogin({...login, email: e.target.value})}
                                    onKeyUp={(e) => setErrorEmail('')}
                                     />
                                <label for="floatingInput">Email address</label>
                                {errorEmail && <div className="text-danger">{errorEmail}</div>}
                            </div>
                            <div className="form-floating">
                                <input type="password" 
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Password" 
                                    value={login.password}
                                    onChange    ={(e) => setLogin({...login, password: e.target.value})}
                                    onKeyUp={(e) => setErrorPassword('')}/>
                                <label for="floatingPassword">Password</label>
                                {errorPassword && <div className="text-danger">{errorPassword}</div>}
                            </div>
                            {/* <div className="mb-3 p-2">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email"
                                    value={login.email}
                                    onChange={(e) => setLogin({ ...login, email: e.target.value })}
                                    onKeyUp={(e) => e.target.value.length > 0 ? setErrorEmail('') : errorEmail} />
                                {errorEmail && <div className="text-danger">{errorEmail}</div>}
                            </div>
                            <div className="mb-3 p-2">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" className="form-control"
                                    id="password"
                                    value={login.password}
                                    onChange={(e) => setLogin({ ...login, password: e.target.value })}
                                    onKeyUp={(e) => e.target.value.length > 0 ? setErrorPassword('') : errorPassword} />
                                {errorPassword && <div className="text-danger">{errorPassword}</div>}
                            </div> */}
                            <div className="row mb-3 p-2">
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-primary" type="submit">Login</button>
                                </div>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-secondary" type="button">Sign In</button>
                                </div>
                            </div>
                            {message && <p style={{ color: message === "Login successful!" ? "green" : "red" }}>{message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginWithPremitiveState;
// This code defines a React component for a login form that uses an object to manage the state of the username and password fields. It includes validation logic to check if the fields are filled out and