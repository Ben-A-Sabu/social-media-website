import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import Profile from '../profile/profile';
import "./topbar.css";

const ICONS = [
  { component: HomeIcon, name: "Home" },
  { component: SearchIcon, name: "Search" },
  { component: NotificationsIcon, name: "Notifications", count: 5 },
  { component: PersonAddAltIcon, name: "New Group" },
  { component: LogoutIcon, name: "Logout" },
];

const myList = [
  {profImg: "assests/b1.jpeg",
  postno: 10,
  followerno: 100,
  followingno: 100,
  profilename: "Name",
},

{
  profImg: "assests/b2.jpg",
  postno: 10,
  followerno: 100,
  followingno: 100,
  profilename: "Name",
}

]

export default function Topbar(props) {
  return (
    <div>
      <img src="assests/logo.png" alt="" className="logo" />
      <div className="topbarContainer">
         <Profile list={myList} index={0}  class="profile"/>
        {ICONS.map((icon, i) => (
          <div key={i} className='topbarIcon'>
            <icon.component className="Icon" />
            {icon.count && 
              <span className="notificationCount">{icon.count}</span>}
            <span className="IconName">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
