import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import FollowIcon from '@mui/icons-material/PersonAddAlt';
import Profile from '../profile/profile';
import "./topbar.css";
import { signinorout, auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';


export default function Topbar({ showIcons, myList }) {
  const [buttonText, setButtonText] = useState("Log In");

  const ICONS = [
    { component: HomeIcon, name: "Home", isVisible: showIcons.home },
    { component: SearchIcon, name: "Search", isVisible: showIcons.search },
    { component: NotificationsIcon, name: "Notifications", count: 5, isVisible: showIcons.notifications },
    { component: PersonAddAltIcon, name: "New Group", isVisible: showIcons.newGroup },
    { component: MessageIcon, name: "Message", isVisible: showIcons.message },
    { component: FollowIcon, name: "Follow", isVisible: showIcons.follow },
    { component: LogoutIcon, name: buttonText, isVisible: showIcons.logout, onclick: signinorout }
  ];
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setButtonText("Log Out");
      }else {
        setButtonText("Log In");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <div>
      <img src="assests/logo.png" alt="chatz logo" className="logo" />
      <div className="topbarContainer">
        <Profile list={myList} class="profile" />
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
