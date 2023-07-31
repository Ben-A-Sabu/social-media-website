import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import "./topbar.css";

const ICONS = [
  { component: HomeIcon, name: "Home" },
  { component: SearchIcon, name: "Search" },
  { component: NotificationsIcon, name: "Notifications" },
  { component: PersonAddAltIcon, name: "New Group" },
  { component: LogoutIcon, name: "Logout" },
];

export default function Topbar() {
  return (
    <div>
      <img src="assests/logo.png" alt="" className="logo" />
      <div className="topbarContainer">
        <div className='profileContainer'>
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

        {ICONS.map((icon, i) => (
          <div key={i} className='topbarIcon'>
            <icon.component className="Icon" />
            <span className="IconName">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
