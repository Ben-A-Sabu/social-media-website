import { initializeApp } from "firebase/app";


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