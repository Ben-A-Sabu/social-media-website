import { initializeApp } from "firebase/app";
import { getDatabase, set, get, ref } from 'firebase/database';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
const auth = getAuth(app);
const db = getDatabase(app);
<<<<<<< HEAD
=======
export { app, auth, db }; // Export the database and authentication

>>>>>>> a961048b3868f1a755cc92aa9990c55eb0956609



export function signinorout() {
    if (auth.currentUser) {
        auth.signOut().then(() => {
            console.log("Succesfuly Signed out");
        }).catch((error) => {
            console.log("Error");
        });
    } else {
        let provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
<<<<<<< HEAD
                console.log(user, "line 43 reached");
=======
>>>>>>> a961048b3868f1a755cc92aa9990c55eb0956609
                createinitialuserdata(user);
            }).catch((error) => {
                console.log("Error : ", error);
            });
    }
}
async function createinitialuserdata(user) {
<<<<<<< HEAD
    //  check if userdetails already exists
    const existingSnapshot = await (get(ref(db, 'users/' + user.uid)))
    console.log(existingSnapshot);
=======

    const existingSnapshot = await (get(ref(db, 'users/' + user.uid)));
>>>>>>> a961048b3868f1a755cc92aa9990c55eb0956609

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

async function setuserdetails(auth, userDetail) {
    if (auth.currentUser) {
        set(ref(db, 'users/' + auth.currentUser.uid), userDetail)
            .then(() => {
                alert("Successfully updated");
            })
            .catch((error) => {
                console.error("Error writing to Firebase", error);
            });
    }
}

<<<<<<< HEAD
export { getuserdetails, auth, db }; // Export the function to get user details
=======

async function getdetailsfromuid(uid) {
    console.log(uid, "uid");
    const snapshot = await get(ref(db, 'users/' + uid));
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        console.log("No data available");
    }
}



export { getuserdetails,setuserdetails,getdetailsfromuid }; // Export the function to get user details
>>>>>>> a961048b3868f1a755cc92aa9990c55eb0956609
