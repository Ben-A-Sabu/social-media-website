import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "./profile.css";

export default function Profile(props) {
  // Destructure props to access properties from props.list
  let userdetails = {
    profimg: props.list.profImg,
    postno: props.list.postno,
    followerno: props.list.followerno,
    followingno: props.list.followingno,
    profilename: props.list.profilename
  };


  return (
    <div className='profileContainer'>
      <div className='profileImgContainer col'>
        {
          <img src={userdetails.profimg} alt="profile" className="profileImg" />
        }
        <span className="IconName">{userdetails.profilename}</span>
      </div>
      <div className='profiledetails'>
        <div className='col'>
          <div className="postNumber">{userdetails.postno}</div>
          <span className="profileElmt">Posts | </span>
        </div>
        <div className='col'>
          <div className="followerNumber">{userdetails.followerno}</div>
          <span className="profileElmt">Followers | </span>
        </div>
        <div className='col'>
          <div className="followingNumber">{userdetails.followingno}</div>
          <span className="profileElmt">Following</span>
        </div>
      </div>
    </div>
  );
}
