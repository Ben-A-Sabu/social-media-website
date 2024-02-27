import './login.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'; // Import React and useState
import { Alert } from '@mui/material';
import { getDatabase, ref, get } from 'firebase/database'; // Import get function
import { app } from '../../firebase.js';
import { SignIn } from '../../Authentication.js';

const db = getDatabase(app);

export default function Login() {
    const [username, setUsername] = useState(''); // State for username input
    const [password, setPassword] = useState(''); // State for password input
    const [alertMessage, setAlertMessage] = useState(''); // State for alert message
    const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

    async function ValidateLogin(Username, Password) {
        let logincredential = await get(ref(db, 'users/' + Username));
        if (logincredential && logincredential[Password] === Password) {
            console.log('Login Successful');
        }
        else if (Username === '' || Password === '') {
            showAlertMessage('Please fill all fields');
        } else if (logincredential && logincredential[Username] !== Password) {
            showAlertMessage('Invalid Username or Password');
        } else {
            showAlertMessage('Invalid Username or Password');
        }
    }




    function showAlertMessage(message) {
        setAlertMessage(message);
        setShowAlert(true);
    }

    function Register() {
        return (
            <Link to="/register">Register</Link>
        );
    }

    return (
        <div className='login'>
            <div className="Loginbody">
                <div className='col form'>
                    <h1>LOGIN</h1>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> {/* Bind input value to username state */}
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> {/* Bind input value to password state */}
                    <div className="actionpart row">
                        <button onClick={() => ValidateLogin(username, password)}>Login</button> {/* Call ValidateLogin with current username and password */}
                        <button onClick={Register}>Register</button>
                    </div>
                    <div>Forgot Password?</div>
                    <div>{<SignIn page={'login'} />}</div>

                </div>
                {showAlert && <Alert severity="error">{alertMessage}</Alert>}
            </div>
        </div>
    );
}
