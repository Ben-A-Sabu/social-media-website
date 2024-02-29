import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import FollowIcon from '@mui/icons-material/PersonAddAlt';
import Profile from '../profile/profile';
import "./topbar.css";
import { useFirebase } from '../../firebase';

function isWorking() {
  window.location.href = "/home";
}


export default function Topbar({ showIcons, myList, profileIndex }) {


  const firebase = useFirebase();
  const ICONS = [
    { component: HomeIcon, name: "Home", isVisible: showIcons.home, onclick: isWorking },
    { component: SearchIcon, name: "Search", isVisible: showIcons.search },
    { component: NotificationsIcon, name: "Notifications", count: 5, isVisible: showIcons.notifications },
    { component: PersonAddAltIcon, name: "New Group", isVisible: showIcons.newGroup },
    { component: MessageIcon, name: "Message", isVisible: showIcons.message },
    { component: FollowIcon, name: "Follow", isVisible: showIcons.follow },
    { component: LogoutIcon, name: "Logout", isVisible: showIcons.logout, onclick: () => firebase.signinorout() }
  ];



  return (
    <div>
      <img src="assests/logo.png" alt="" className="logo" />
      <div className="topbarContainer">
        <Profile list={myList} index={profileIndex} class="profile" />
        {ICONS.map((icon, i) => (
          icon.isVisible &&
          <div key={i} className="topbarIcon" onClick={icon.onclick}>
            <icon.component className="iconImg" />
            {icon.count && <span className="notificationCount">{icon.count}</span>}
            <span className="IconName">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
