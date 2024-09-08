import PageTemplate from '../../componenets/pageTemplate/pagetemplate';
import { useState,useEffect } from 'react';


export default function Viewprofile({userdet, userposts}) {

    const [myList, setmyList] = useState(userdet);
    const [posts, setposts] = useState(userposts);
    
    let showIcons = {
        home: true,
        search: true,
        notifications: false,
        newGroup: true,
        logout: true,
        message: true,
        follow: true
    };

<<<<<<< HEAD
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
=======
    useEffect(() => {
        if (userdet && userposts) {
            setmyList(userdet);
            setposts(userposts);
        }
        else {
            console.log("No user---from view profile---");
        }
    }, [userdet, userposts]);


>>>>>>> a961048b3868f1a755cc92aa9990c55eb0956609
    return (
            <PageTemplate props={{ showIcons, myList, posts, pageName: "Profile" }} />
        );
}
