import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import FollowIcon from '@mui/icons-material/PersonAddAlt';
import Profile from '../profile/profile';
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar({ showIcons, myList, profileIndex }) {

  const ICONS = [
    { component: HomeIcon, name: "Home", isVisible: showIcons.home, onclick: () => { <Link to="/">View Profile</Link> } },
    { component: SearchIcon, name: "Search", isVisible: showIcons.search },
    { component: NotificationsIcon, name: "Notifications", count: 5, isVisible: showIcons.notifications },
    { component: PersonAddAltIcon, name: "New Group", isVisible: showIcons.newGroup },
    { component: MessageIcon, name: "Message", isVisible: showIcons.message },
    { component: FollowIcon, name: "Follow", isVisible: showIcons.follow },
    { component: LogoutIcon, name: "Logout", isVisible: showIcons.logout }
  ];



  return (
    <div>
      <img src="assests/logo.png" alt="" className="logo" />
      <div className="topbarContainer">
        <Profile list={myList} index={profileIndex} class="profile" />
        {ICONS.map((icon, i) => (
          icon.isVisible &&
          <div key={i} className='topbarIcon'>
            <icon.component className="Icon" />
            {icon.count && <span className="notificationCount">{icon.count}</span>}
            <span className="IconName">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
