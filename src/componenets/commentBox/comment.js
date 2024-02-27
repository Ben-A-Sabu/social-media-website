

export default function Comment() {
    return (
        <div className="commentContainer">
            <div className="commentHeader">
                <div className="commentProfile">
                    <AccountCircleRoundedIcon className="Icon ProfileImg" />
                    <span className="IconName">Name</span>
                </div>
                <div className="commentOptions">
                    <MoreVertRoundedIcon className="Icon" />
                </div>
            </div>
            <div className="commentBody">
                <span className="commentText">This is a comment</span>
            </div>
        </div>
    )
}