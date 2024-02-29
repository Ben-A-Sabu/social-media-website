import { initializeApp } from "firebase/app";
import { getDatabase, set, get, ref } from 'firebase/database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPsOFcVsTt1L7wR84zI3AxIi8hyiJsB4s",
    authDomain: "social-media-app-82fb2.firebaseapp.com",
    projectId: "social-media-app-82fb2",
    storageBucket: "social-media-app-82fb2.appspot.com",
    messagingSenderId: "412062937469",
    appId: "1:412062937469:web:6a652cee5b49663772dc14",
    databeseURL: "https://social-media-app-82fb2-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
const auth = getAuth(app);
let db = getDatabase(app);
export { auth, db }; // Export the database and authentication

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in");
    } else {
        console.log("User is signed out");
    }
});

export function signinorout() {
    if (auth.currentUser) {
        console.log("Signing out");
        auth.signOut().then(() => {
            console.log("Succesfuly Signed out");
        }).catch((error) => {
            console.log("Error");
        });
    } else {
        let provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API. 
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user, "line 43 reached");

                createinitialuserdata(user);
                return user;
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                alert("Error signing in");
                console.log(errorCode, errorMessage, email, credential);
                // ...
            });
    }
}

async function createinitialuserdata(user) {
    //  check if userdetails already exists

    const existingSnapshot = await (get(ref(db, 'users/' + user.uid)))
    console.log(existingSnapshot);

    if (existingSnapshot.exists()) {
        console.log("User already exists");
        return;
    }

    let userDetail = {
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
    };

    set(ref(db, 'users/' + user.uid), userDetail)
        .then(() => {
            alert("Successfully signed in");
        })
        .catch((error) => {
            console.error("Error writing to Firebase", error);
        });

}

async function getuserdetails(auth) {
    if (auth.currentUser) {
        const snapshot = await get(ref(db, 'users/' + auth.currentUser.uid));
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
        }
    }
}


export { getuserdetails }; // Export the function to get user details
