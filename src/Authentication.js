import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Google } from '@mui/icons-material';
import { app } from './firebase.js';
import { getDatabase, ref, set, get } from 'firebase/database';
import { useState } from "react";



const SignIn = (props) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const db = getDatabase(app);
    const [user_detail, setUserDetail] = useState({}); // State for user details

    const signInWithGoogle = (page) => { // Receive page as an argument

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                const putData = (data) => { // creates a new user in the database
                    set(ref(db, 'users/' + user.displayName), data);
                }

                async function RegisterUser() {
                    const existingSnapshot = await get(ref(db, 'users/' + user.displayName));

                    if (page === 'register' && existingSnapshot.exists()) {
                        // prevent the user from registering with an existing username
                        return;
                    }

                    if (existingSnapshot.exists()) {
                        return;
                    }

                    setUserDetail({
                        Username: user.displayName,
                        ProfImg: user.photoURL,
                        password: user.uid,
                        PostNo: 0,
                        FollowerNo: 0,
                        FollowingNo: 0,
                        ProfileName: user.displayName,
                        friendArray: [],
                        postArray: [],
                        Email: user.email,
                    }
                    ); // Set user details to data

                    putData(user_detail);
                }
                RegisterUser();

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };

    return (

        <div onClick={() => signInWithGoogle(props.page)}>{<Google />}</div>
    );
}

export { SignIn };
