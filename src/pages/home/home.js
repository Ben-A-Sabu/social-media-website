import React from 'react';
import PageTemplate from '../../componenets/pageTemplate/pagetemplate';
import { useFirebase } from '../../firebase';



const posts = [
  'b2.jpeg',
  'b1.jpeg',
  'b3.jpeg',
  'b4.jpeg',
  'b5.jpeg',
  'b6.jpeg',
  'b7.jpeg',
  'b8.jpeg',
  'b2.jpeg',
  'b1.jpeg',
  'b3.jpeg',
  'b4.jpeg',
  'b5.jpeg',
  'b6.jpeg',
  'b7.jpeg',
  'b8.jpeg',
];


export default function Home() {
  let user = null;
  const firebase = useFirebase();
  const auth = firebase.auth;
  console.log("Getting user details", auth.currentUser);
  async function getdetails() {
    console.log("Getting user details", auth.currentUser);
    user = await firebase.getuserdetails(auth);
    console.log(user);
  }

  getdetails();






  let showIcons = {
    home: true,
    search: true,
    notifications: true,
    newGroup: true,
    logout: true,
    message: false, // Hide message icon
    follow: false // Hide follow icon
  };

  let myList =
  {
    profImg: null,// here the profile image will be stored from the backend
    postno: 10,// here the number of post will be stored from the backend
    followerno: 100,// here the number of followers will be stored from the backend
    followingno: 1000,// here the number of following will be stored from the backend
    profilename: "Username",// here the username will be stored from the backend
    friendArray: [], // here the fiends and there value from the backend will be stored
    followingArray: [], // here the following and there value from the backend will be stored
    postArray: [] // here the post and there value from the backend will be stored
  }
    ;
  let pageName = "Home";
  return (
    <PageTemplate props={{ showIcons, myList, posts, pageName }} />
  );
}
