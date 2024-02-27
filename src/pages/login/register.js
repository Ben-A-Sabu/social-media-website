import React from 'react';
import { useState } from 'react';
import './login.css';
import { getDatabase, ref, set, get } from 'firebase/database'; // Import get function
import { app } from '../../firebase.js';
import { SignIn } from '../../Authentication.js';
import { Link } from 'react-router-dom';
const db = getDatabase(app);

export default function Register() {

    const [username, setUsername] = useState(''); // State for username input
    const [password, setPassword] = useState(''); // State for password input
    const [confirmpassword, setConfirmPassword] = useState(''); // State for password input
    const [email, setEmail] = useState(''); // State for email input

    const putData = (data) => { // creates a new user in the database
        set(ref(db, 'users/' + username), data);
    }

    async function RegisterUser(Username, Password, ConfirmPassword) {
        console.log(Username + ' ' + Password + ' ' + ConfirmPassword);
        if (Username === '' || Password === '' || ConfirmPassword === '') {
            return;
        }

        if (Password.length < 8) {
            return;
        }

        if (Password !== ConfirmPassword) {
            return;
        }

        const existingSnapshot = await get(ref(db, 'users/' + username));

        if (existingSnapshot.exists()) {
            return <Link to="/home" />;
        }

        let newlogin = {
            Username: Username,
            ProfImg: null,
            password: Password,
            PostNo: 0,
            FollowerNo: 0,
            FollowingNo: 0,
            ProfileName: Username,
            friendArray: [],
            postArray: [],
            Email: email,
        };

        putData(newlogin);
        // Alert or any other action after successful registration
    }



    return (

        <div className='login'>
            <div className="Loginbody">
                <div className='col form'>
                    <h1>Register</h1>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> {/* Bind input value to username state */}
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> {/* Bind input value to password state */}
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> {/* Bind input value to email state */}
                    <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} /> {/* Bind input value to password state */}
                    <div className="actionpart row">
                        <button onClick={() => RegisterUser(username, password, confirmpassword)}>Register</button> {/* Call RegisterUser with current username and password */}
                    </div>
                    <div><SignIn page={'register'} /></div>
                </div>
            </div>
        </div>

    )
}