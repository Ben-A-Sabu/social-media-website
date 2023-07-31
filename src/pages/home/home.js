import React from 'react';
import Topbar from "../../componenets/topbar/topbar";
import Body from "../../componenets/body/body";
import SearchIcon from '@mui/icons-material/Search';
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
    <div className="Homecontainer row">
      <Topbar />
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
        <div className="post">
          <h1 className="title">Posts</h1>
          <div className="postContainer">
            {posts.map((post, i) => (
              <div key={i} className="postImgContainer">
                <img src={`assests/${post}`} alt="" className="postImg"/>
                <FavoriteBorderRoundedIcon className="likeIcon"/>
                <MapsUgcOutlinedIcon className="commentIcon"/>
              </div>
            ))}
          </div>
        </div>
      </Body>
    </div>
  );
}
