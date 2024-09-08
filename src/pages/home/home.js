import React from 'react';
import PageTemplate from '../../componenets/pageTemplate/pagetemplate';
import { getuserdetails, auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';


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
<<<<<<< HEAD
  const [myList, setmyList] = useState(
    {
      profImg: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
      postno: 0,
      followerno: 0,
      followingno: 0,
      profilename: "Username",
      friendArray: [],
      followingArray: [],
      postArray: []
    });
=======

  const [myList, setmyList] = useState(
    { profImg:"https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png", 
      postno: 10, 
      followerno: 100, 
      followingno: 1000,
      profilename:'UserName', 
      friendArray: [], 
      followingArray: [],
       postArray: [] 
    }
  );
>>>>>>> a961048b3868f1a755cc92aa9990c55eb0956609

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getdetails();
<<<<<<< HEAD
=======
      } 
      else {
        setmyList({ profImg:"https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png", 
                    postno: 10, 
                    followerno: 100, 
                    followingno: 1000,
                    profilename:'UserName', 
                    friendArray: [], 
                    followingArray: [],
                    postArray: [] 
                });     
>>>>>>> a961048b3868f1a755cc92aa9990c55eb0956609
      }
    });
    return () => {
      unsubscribe();
    };
  });

<<<<<<< HEAD
  let user = null;

  async function getdetails() {
    user = await getuserdetails(auth);
    setmyList(
      {
        profImg: user.ProfImg,
        postno: user.PostNo,
        followerno: user.FollowerNo,
        followingno: user.FollowingNo,
        profilename: user.Username,
        friendArray: user.friendArray,
        followingArray: user.followingArray,
        postArray: user.postArray
      });
  }


=======
  async function getdetails() {
    try {
      const userDetails = await getuserdetails(auth);
      setmyList({ profImg: userDetails.ProfImg,
                  postno: userDetails.PostNo,
                  followerno: userDetails.FollowerNo,
                  followingno: userDetails.FollowingNo,
                  profilename: userDetails.Username,
                  friendArray: userDetails.friendArray,
                  followingArray: userDetails.followingArray,
                  postArray: userDetails.postArray 
                });
    }
    catch(err){
      console.log(err);
    }
  }

>>>>>>> a961048b3868f1a755cc92aa9990c55eb0956609
  let showIcons = {
    home: true,
    search: true,
    notifications: true,
    newGroup: true,
    logout: true,
    message: false, // Hide message icon
    follow: false // Hide follow icon
  };
<<<<<<< HEAD


=======
>>>>>>> a961048b3868f1a755cc92aa9990c55eb0956609
  let pageName = "Home";
  return (
    <PageTemplate props={{ showIcons, myList, posts, pageName }} />
  );
}
