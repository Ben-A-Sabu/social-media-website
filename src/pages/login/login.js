import './login.css';
import { Google } from '@mui/icons-material';
import React from 'react'; // Import React and useState
import { useFirebase } from '../../firebase';
import { useEffect } from 'react';


import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import '../../componenets/profile/profile.css';

export default function Login() {

    const firebase = useFirebase();

    useEffect(() => {

        firebase.auth.onAuthStateChanged(user => {
            if (user) {
                console.log("User is logged in", user);
                window.location.href = "/home";
            }
            else {
                console.log("User is logged out");
            }
        });
    }
        , [
            firebase.auth
        ]);

    return (
        <div className='login'>
            <div className='Qoutes col'>
            </div>
            <div className="Loginbody col">
                <h1>Sign Up or Log In</h1>
                <div className='profileImgContainer col'>
                    <AccountCircleRoundedIcon className="Icon ProfileImg" />
                </div>

                <div>Sign In with  Google </div>
                <div className='LogBtn' onClick={() => firebase.signinorout()}  > Google {<Google />}</div>
            </div>
        </div>
    );
}
