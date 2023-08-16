import React from 'react';
import { useState } from 'react';
import Topbar from "../../componenets/topbar/topbar";
import Body from "../../componenets/body/body";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import "./home.css";

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



// Separate Component for Post
const Post = ({ imgSrc }) => (
  <div className="postImgContainer">
    <img src={`assests/${imgSrc}`} alt="" className="postImg"/>
    <div className="postInfo">
      <FavoriteBorderRoundedIcon className="likeIcon"/>
      <span className="likeCount">100</span>
      <MapsUgcOutlinedIcon className="commentIcon"/>
      <span className="commentCount">100</span>
    </div>
  </div>
);


const FriendProfile = ({ onProfileClick, showOptions }) => (
  <div 
    className='profileImgContainer col'
    onClick={onProfileClick}  // This will handle the click event
  >
    <AccountCircleRoundedIcon className="Icon ProfileImg" />
    <span className="IconName">Name</span>

    {showOptions && (  // Conditionally render the options based on showOptions state
      <div className="friendOptions">
        <button>Follow</button>
        <button>Message</button>
      </div>
    )}
  </div>
);


export default function Home() {

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
      <Topbar id="hometopbar" />
      <Body id="homeBody">
        <div className="col topbar">
          <div className='row ser_feat_area'>
            <div className="searchbar">
              <SearchIcon className="searchIcon"/>
              <input type="text" placeholder="Search" className="searchInput"/>
            </div>
            <div className="feature">
              <div className="sendIcon">
                <SendRoundedIcon className="sendIcon"/>
              </div>
              <div className="AddPhoto">
                <AddPhotoAlternateRoundedIcon className="AddPhotoIcon"/>
                <span className="AddPhotoText">Add Photo</span>
              </div>
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
              {posts.map((post, i) => <Post key={post + i} imgSrc={post} />)}
            </div>
          </div>
        </Body>
      </div>
  );}
