import React, { useEffect } from 'react';
import { useState } from 'react';
import Topbar from "../../componenets/topbar/topbar";
import Body from "../../componenets/body/body";
import SearchIcon from '@mui/icons-material/Search';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import FriendProfile from "../../componenets/friendprofile/friendprofile";
import Post from "../post/post";
import { getuserdetails, auth } from '../../firebase';
import "./pagetemplate.css";
import { onAuthStateChanged } from 'firebase/auth';


export default function PageTemplate({ props }) {
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [friendArr, setFriendArr] = useState([]);
    const [length, setLength] = useState(0);
    const [posts,setposts]=useState([])


    useEffect(() => {
        try {
         onAuthStateChanged(auth, (user) => {
            if (user) {
                details();
            }
            else {
                console.log("No user");
                setFriendArr([
                    "billy",
                    "bobby",
                    "billy",
                    "bobby",
                    "billy",
                    "bobby",
                ]);
                setLength(6);
                setposts(props.posts);
                console.log(posts, "posts-------------------");
            

            }
        });
        } catch (error) {
            console.log(error);
        }
    }, [auth]);
    useEffect(() => {
        if (props) {
            setposts(props.posts);
            console.log(posts, "posts-------------------");

        }
        {
          // wait for the props to be available 
          console.log("waiting for props");
          setposts(
            [
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
            ]
          )

        }
        
    }, [props.posts]);



   async function details() {
        try {
            const data = await getuserdetails(auth);

            if (data.friendArray.length === 0) {
                console.log("No friends");
            }
            else {
                setFriendArr(data.friendArray);
                setLength(data.friendArray.length);
            }
        }
        catch (error) {
            console.log(error);
        }  

        
    }


    const handleProfileClick = idx => {
        if (selectedFriend === idx) {
            setSelectedFriend(null); // If the selected friend is clicked again, hide the options
        } else {
            setSelectedFriend(idx); // Otherwise, show the options for the clicked friend
        }
    };
    return (
        <div className="row Home">
            <Topbar showIcons={props.showIcons} myList={props.myList} />
            <Body id="homeBody">
                <div className="col topbar">
                    <div className='row ser_feat_area'>
                        <div className="searchbar">
                            <SearchIcon className="searchIcon" />
                            <input type="text" placeholder="Search" className="searchInput" />
                        </div>
                        <div className="feature">
                            <div className="sendIcon">
                                <SendRoundedIcon className="sendIcon" />
                            </div>
                            {props.pageName === "Home" &&
                                <div className="AddPhoto">
                                    <AddPhotoAlternateRoundedIcon className="AddPhotoIcon" />
                                    <span className="AddPhotoText">Add Photo</span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='row friendsRow'>
                       {
                            length === 0 ? (
                                <div>
                                    <h2>No friends</h2>
                                </div>
                            ) : (
                                    friendArr.map((friend, i) => (
                                             <FriendProfile
                                                 key={friend + i}
                                                 userId={i}
                                                 onProfileClick={() => handleProfileClick(i)}
                                                 showOptions={selectedFriend === i}
                                             />
                                    ))
                                )
                        } 
                    </div>
                </div>
                <div className="post">
                    <div className="postContainer">
                    {posts.map((post, i) => <Post key={post + i} imgSrc={post} />)}
                    </div>
                </div>
            </Body>
        </div>
    );
}