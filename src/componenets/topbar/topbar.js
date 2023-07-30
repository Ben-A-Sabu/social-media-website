import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import Notification from '@mui/icons-material/Notifications';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home'
export default function Topbar() {
    return (
        <div > 
         <img  src="assests/logo.png" alt="" className="logo" />
         <div className="topbarContainer" >
          <div className='profileContainer'>
          <div className='profileArea'>
            <AccountCircleRoundedIcon className="Icon" />
          </div>
          <span className="IconName">Name</span>
          <div className='profiledetails'>
            <div className='col'>
            <div className="postNumber">5</div>
            <span className="IconName">Posts | </span>
            </div>
            <div className='col'>
            <div className="followerNumber">2</div>
            <span className="IconName"> Followers | </span>
            </div>
            <div className='col'>
            <div className="followingNumber">20</div>
            <span className="IconName"> Following </span>
            </div>
          </div>
          </div>

          <div className=' topbarIcon'>
          <HomeIcon className="Icon"/>
          <span className="IconName">Home</span> 
          </div>  
          <div className='topbarIcon'>
          <SearchIcon className="Icon"/>
          <span className="IconName">Search</span> 
          </div>
            <div className='topbarIcon'>
            <Notification className="Icon"/>
            <span className="IconName">Notifications</span>
            </div>
            <div className='topbarIcon'>
            <PersonAddAltIcon className="Icon" />
            <span className="IconName">New Group</span>
            </div>
            <div className='topbarIcon'>
          <LogoutIcon className="Icon" />
          <span className="IconName">Logout</span>
        </div>
        </div>
       
        </div>
    )
}
