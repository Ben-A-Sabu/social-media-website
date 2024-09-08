import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const FriendProfile = ({ userId, onProfileClick, showOptions }) => (
  <div className='profileImgContainer col' onClick={onProfileClick}>
    <AccountCircleRoundedIcon className="Icon ProfileImg" />
    <span className="IconName">Name</span>

    {showOptions && (  // Conditionally render the options based on showOptions state
      <div className="friendOptions">
        <Link to={`/profile/${userId}`}>View Profile</Link>
      </div>
    )}
  </div>
);

export default FriendProfile;
