import './login.css';
import { Google } from '@mui/icons-material';
import React from 'react'; // Import React and useState
import { signinorout } from '../../firebase'; // Import the signinorout function from firebase.js


import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import '../../componenets/profile/profile.css';

export default function Login() {

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
                <div className='LogBtn' onClick={() => signinorout()}  > Google {<Google />}</div>
            </div>
        </div>
    );
}
