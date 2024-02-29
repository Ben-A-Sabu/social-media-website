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



    const handleProfileClick = idx => {
        if (selectedFriend === idx) {
            setSelectedFriend(null); // If the selected friend is clicked again, hide the options
        } else {
            setSelectedFriend(idx); // Otherwise, show the options for the clicked friend
        }
    };
    return (
        <div className="row Home">
            <Topbar showIcons={props.showIcons} myList={props.myList} profileIndex={0} />
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
                        {Array(16).fill(null).map((_, idx) => (
                            <FriendProfile
                                key={idx}
                                onProfileClick={() => handleProfileClick(idx)}
                                showOptions={selectedFriend === idx}
                            />
                        ))}
                    </div>

                </div>
                <div className="post">
                    <div className="postContainer">
                        {props.posts.map((post, i) => <Post key={post + i} imgSrc={post} />)}
                    </div>
                </div>
            </Body>
        </div>
    );
}