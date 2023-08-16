import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "./profile.css";
export default function Profile(props) {
    console.log(props.list);
    let profImg = props.list[props.index].profImg;
    let postno = props.list[props.index].postno;
    let followerno = props.list[props.index].followerno;
    let followingno = props.list[props.index].followingno;
    let profilename = props.list[props.index].profilename;



    return(
        <div className='profileContainer'>
        <div className='profileImgContainer col'>
        { 
    profImg !== null 
    ? <img src={profImg} alt="profile" className="profileImg"/> 
    : <AccountCircleRoundedIcon className="Icon ProfileImg" />  
}
          <span className="IconName">{profilename}</span>
        </div>
        <div className='profiledetails'>
          <div className='col'>
            <div className="postNumber">{postno}</div>
            <span className="profileElmt">Posts | </span>
          </div>
          <div className='col'>
            <div className="followerNumber">{followerno}</div>
            <span className="profileElmt">Followers | </span>
          </div>
          <div className='col'>
            <div className="followingNumber">{followingno}</div>
            <span className="profileElmt">Following</span>
          </div>
        </div>
      </div>
    )}

