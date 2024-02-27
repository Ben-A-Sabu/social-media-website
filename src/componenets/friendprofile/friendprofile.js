import React from 'react';
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const FriendProfile = ({ onProfileClick, showOptions }) => (
    <div
        className='profileImgContainer col'
        onClick={onProfileClick}  // This will handle the click event
    >
        <AccountCircleRoundedIcon className="Icon ProfileImg" />
        <span className="IconName">Name</span>

        {showOptions && (  // Conditionally render the options based on showOptions state
            <div className="friendOptions">
                <Link to="/profile">View Profile</Link>
            </div>
        )}
    </div>
);

export default FriendProfile;
