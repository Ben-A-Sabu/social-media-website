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

    useEffect(() => {
        if (userdet && userposts) {
            setmyList(userdet);
            setposts(userposts);
        }
        else {
            console.log("No user---from view profile---");
        }
    }, [userdet, userposts]);


    return (
            <PageTemplate props={{ showIcons, myList, posts, pageName: "Profile" }} />
        );
}
