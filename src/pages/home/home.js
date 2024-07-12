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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getdetails();
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
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

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
