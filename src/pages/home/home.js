import React from 'react';
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
];

export default function Home() {
  return (
    <div className="row">
      <Topbar id="hometopbar" />
      <div className="profilepart"></div>
      <Body>
        <div className="row topbar">
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
        <div className="profilepart row">
          <div className='profileImgContainer col'>
            <AccountCircleRoundedIcon className="Icon ProfileImg" />
            <span className="IconName">Name</span>
          </div>
          <div className='profiledetails'>
            <div className='col'>
              <div className="postNumber">5</div>
              <span className="profileElmt">Posts | </span>
            </div>
            <div className='col'>
              <div className="followerNumber">2</div>
              <span className="profileElmt">Followers | </span>
            </div>
            <div className='col'>
              <div className="followingNumber">20</div>
              <span className="profileElmt">Following</span>
            </div>
          </div>
        </div>
       
        <div className="post">
          <div className="postContainer">
            {posts.map((post, i) => (
              <div key={i} className="postImgContainer">
                <img src={`assests/${post}`} alt="" className="postImg"/>
                <div className="postInfo">
                <FavoriteBorderRoundedIcon className="likeIcon"/>
                <span className="likeCount">100</span>
                <MapsUgcOutlinedIcon className="commentIcon"/>
                <span className="commentCount">100</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Body>
    </div>
  );
}
