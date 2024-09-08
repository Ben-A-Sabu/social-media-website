import React from 'react';
import PageTemplate from '../../componenets/pageTemplate/pagetemplate';

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



export default function Viewprofile() {



    let showIcons = {
        home: true,
        search: true,
        notifications: false,
        newGroup: true,
        logout: true,
        message: true,
        follow: true
    };

    let myList =
    {
        profImg: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
        postno: 0,
        followerno: 0,
        followingno: 0,
        profilename: "Username",
        friendArray: [],
        followingArray: [],
        postArray: []
    }
    return (
        <PageTemplate props={{ showIcons, myList, posts, pageName: "Profile" }} />
    );
}
