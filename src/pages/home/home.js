import React from 'react';
import PageTemplate from '../../componenets/pageTemplate/pagetemplate';
import { getuserdetails, auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { Details } from '@mui/icons-material';


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
  const [userdetails, setuserdetails] = useState({ Username: "User", Email: "Email", ProfImg: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" });
  const [myList, setmyList] = useState({ profImg: userdetails.ProfImg, postno: 10, followerno: 100, followingno: 1000, profilename: userdetails.Username, friendArray: [], followingArray: [], postArray: [] });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        let username = user.displayName;
        let email = user.email;
        let photoURL = user.photoURL;
        let usserdetails = { Username: username, Email: email, ProfImg: photoURL };
        setuserdetails(usserdetails);
        getdetails();


      } else {
        setuserdetails({ Username: "User", Email: "Email", ProfImg: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" });
      }
    }
    );
    return () => {
      unsubscribe();
    };
  }, [auth]);

  let user = null;
  async function getdetails() {
    user = await getuserdetails(auth);
    setmyList({ profImg: user.ProfImg, postno: user.PostNo, followerno: user.FollowerNo, followingno: user.FollowingNo, profilename: user.Username, friendArray: user.friendArray, followingArray: user.followingArray, postArray: user.postArray });
  }






  let showIcons = {
    home: true,
    search: true,
    notifications: true,
    newGroup: true,
    logout: true,
    message: false, // Hide message icon
    follow: false // Hide follow icon
  };



  let pageName = "Home";
  return (
    <PageTemplate props={{ showIcons, myList, posts, pageName }} />
  );
}
