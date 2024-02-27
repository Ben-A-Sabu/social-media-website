
import React from "react";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';

const Post = ({ imgSrc }) => (
    <div className="postImgContainer">
        <img src={`assests/${imgSrc}`} alt="" className="postImg" />
        <div className="postInfo">
            <FavoriteBorderRoundedIcon className="likeIcon" />
            <span className="likeCount">100</span>
            <MapsUgcOutlinedIcon className="commentIcon" />
            <span className="commentCount">100</span>
        </div>
    </div>
);

export default Post;      