

import './login.css';
import CloseIcon from '@mui/icons-material/Close';
export default function Login(){




    return(
        <div className='login'>
        <div className="Loginbody">
            <form className='col'>
            <CloseIcon className="closeicon"/>
            <h1>LOGIN</h1>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <div className="actionpart row">
                <button>Login</button>
                <button>Register</button>
                </div>
                <p>Forgot Password?</p>
            </form>

        </div>
        </div>
    )



}